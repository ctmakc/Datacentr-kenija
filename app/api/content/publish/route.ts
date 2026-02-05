import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

interface PublishRequest {
  title: string;
  content: string;
  contentType: "news" | "blog" | "social" | "email";
  language: "en" | "zh" | "ru";
  publishNow: boolean;
  scheduledFor?: string;
  platforms?: string[];
}

interface ContentMetadata {
  id: string;
  title: string;
  slug: string;
  contentType: string;
  language: string;
  status: "draft" | "published" | "scheduled";
  createdAt: string;
  publishedAt?: string;
  scheduledFor?: string;
  filePath: string;
  platforms: string[];
}

// Generate a URL-friendly slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 60);
}

// Generate unique ID
function generateId(): string {
  return `content_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: PublishRequest = await request.json();

    // Validate request
    if (!body.title || !body.content || !body.contentType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = generateId();
    const slug = generateSlug(body.title);
    const now = new Date().toISOString();

    // Create content directory structure
    const contentDir = join(process.cwd(), "content", body.contentType, body.language);
    await mkdir(contentDir, { recursive: true });

    // Create content file (Markdown format)
    const fileName = `${slug}.md`;
    const filePath = join(contentDir, fileName);

    const frontmatter = `---
id: ${id}
title: "${body.title}"
type: ${body.contentType}
language: ${body.language}
status: ${body.publishNow ? "published" : body.scheduledFor ? "scheduled" : "draft"}
createdAt: ${now}
${body.publishNow ? `publishedAt: ${now}` : ""}
${body.scheduledFor ? `scheduledFor: ${body.scheduledFor}` : ""}
platforms: [${(body.platforms || []).map(p => `"${p}"`).join(", ")}]
---

`;

    const fullContent = frontmatter + body.content;

    // Write content file
    await writeFile(filePath, fullContent, "utf-8");

    // Create metadata for response
    const metadata: ContentMetadata = {
      id,
      title: body.title,
      slug,
      contentType: body.contentType,
      language: body.language,
      status: body.publishNow ? "published" : body.scheduledFor ? "scheduled" : "draft",
      createdAt: now,
      publishedAt: body.publishNow ? now : undefined,
      scheduledFor: body.scheduledFor,
      filePath: `content/${body.contentType}/${body.language}/${fileName}`,
      platforms: body.platforms || [],
    };

    // If publishing to social platforms, queue for posting
    if (body.publishNow && body.platforms && body.platforms.length > 0) {
      await queueSocialPosts(metadata, body.content, body.platforms);
    }

    return NextResponse.json({
      success: true,
      message: body.publishNow ? "Content published successfully" : "Content saved as draft",
      metadata,
    });
  } catch (error) {
    console.error("Content publish error:", error);
    return NextResponse.json(
      { error: "Failed to publish content" },
      { status: 500 }
    );
  }
}

// Queue social media posts (placeholder for actual integration)
async function queueSocialPosts(
  metadata: ContentMetadata,
  content: string,
  platforms: string[]
): Promise<void> {
  // This would integrate with:
  // - LinkedIn API
  // - Twitter/X API
  // - Buffer/Hootsuite API
  // - Custom posting service

  const queueDir = join(process.cwd(), "content", "queue");
  await mkdir(queueDir, { recursive: true });

  const queueFile = join(queueDir, `${metadata.id}.json`);
  const queueData = {
    ...metadata,
    content: content.substring(0, 1000), // Truncate for social
    platforms,
    status: "queued",
    queuedAt: new Date().toISOString(),
  };

  await writeFile(queueFile, JSON.stringify(queueData, null, 2), "utf-8");
}

// GET endpoint to list content
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const contentType = searchParams.get("type");
  const language = searchParams.get("language") || "en";
  const status = searchParams.get("status");

  // In a real implementation, this would read from a database
  // For now, return mock data
  const mockContent = [
    {
      id: "content_1",
      title: "Kenya AI Compute Announces Partnership",
      slug: "kenya-ai-compute-announces-partnership",
      contentType: "news",
      language: "en",
      status: "published",
      createdAt: "2025-02-05T10:00:00Z",
      publishedAt: "2025-02-05T10:00:00Z",
    },
    {
      id: "content_2",
      title: "Building Sustainable AI Infrastructure",
      slug: "building-sustainable-ai-infrastructure",
      contentType: "blog",
      language: "en",
      status: "published",
      createdAt: "2025-02-03T14:00:00Z",
      publishedAt: "2025-02-04T09:00:00Z",
    },
  ];

  let filtered = mockContent;

  if (contentType) {
    filtered = filtered.filter((c) => c.contentType === contentType);
  }

  if (status) {
    filtered = filtered.filter((c) => c.status === status);
  }

  return NextResponse.json({ content: filtered });
}
