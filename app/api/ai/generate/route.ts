import { NextRequest, NextResponse } from "next/server";

// Types for the request
interface GenerateRequest {
  prompt: string;
  contentType: "news" | "blog" | "social" | "email";
  tone: "professional" | "casual" | "enthusiastic" | "formal";
  language: "en" | "zh" | "ru";
}

// Gemini API integration
async function generateWithGemini(request: GenerateRequest): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const systemPrompt = getSystemPrompt(request.contentType, request.tone, request.language);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser Request: ${request.prompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

function getSystemPrompt(contentType: string, tone: string, language: string): string {
  const languageNames: Record<string, string> = {
    en: "English",
    zh: "Chinese (Simplified)",
    ru: "Russian",
  };

  const baseContext = `You are a professional content writer for Kenya AI Compute, a company building AI infrastructure in Kenya.
The company focuses on:
- Building a 1MW AI compute datacenter in Kenya
- Leveraging renewable energy (geothermal, solar)
- DePIN network integrations (Render, Akash, io.net)
- Serving global AI/ML customers
- Low-cost power at $0.04/kWh`;

  const contentTypePrompts: Record<string, string> = {
    news: `Write a professional news article. Include:
- Compelling headline
- Lead paragraph with key facts
- Supporting details and quotes
- Call to action`,
    blog: `Write an informative blog post. Include:
- Engaging title
- Introduction with hook
- Multiple sections with subheadings
- Conclusion with takeaways`,
    social: `Create a social media post. Make it:
- Concise (under 280 characters for Twitter, 300 for LinkedIn)
- Engaging with emojis where appropriate
- Include relevant hashtags
- Have a clear call to action`,
    email: `Write a professional email newsletter. Include:
- Subject line
- Personal greeting
- Main content with clear sections
- Call to action
- Professional sign-off`,
  };

  const toneGuides: Record<string, string> = {
    professional: "Use a professional, business-focused tone.",
    casual: "Use a friendly, conversational tone.",
    enthusiastic: "Use an excited, energetic tone with enthusiasm.",
    formal: "Use a formal, corporate tone.",
  };

  return `${baseContext}

Content Type: ${contentType}
${contentTypePrompts[contentType]}

Tone: ${toneGuides[tone]}

Language: Write in ${languageNames[language]}.

Important: Focus on accuracy, engagement, and brand consistency.`;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();

    // Validate request
    if (!body.prompt || !body.contentType) {
      return NextResponse.json(
        { error: "Missing required fields: prompt and contentType" },
        { status: 400 }
      );
    }

    // Check for API key - if not present, return mock content for demo
    if (!process.env.GEMINI_API_KEY) {
      const mockContent = generateMockContent(body);
      return NextResponse.json({ content: mockContent, mock: true });
    }

    const content = await generateWithGemini(body);
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Content generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}

// Mock content generator for demo purposes
function generateMockContent(request: GenerateRequest): string {
  const templates: Record<string, string> = {
    news: `# ${request.prompt}

## Breaking News from Kenya AI Compute

Kenya AI Compute announced today a significant development in its mission to build Africa's premier AI infrastructure.

### Key Highlights

- **Strategic Progress**: The company continues to make substantial progress on its Phase 1 datacenter development
- **Renewable Energy**: Leveraging Kenya's world-class geothermal resources for sustainable operations
- **Global Partnerships**: Expanding collaborations with leading technology providers

### Industry Impact

This development positions Kenya AI Compute at the forefront of Africa's digital transformation, providing essential infrastructure for the growing demand in AI and machine learning applications.

### Looking Ahead

"We are committed to delivering world-class AI infrastructure while maintaining our focus on sustainability and cost efficiency," said the company leadership.

---
*For more information, visit kenyaaicompute.com*`,

    blog: `# ${request.prompt}

## Introduction

The landscape of AI infrastructure is rapidly evolving, and Kenya AI Compute is at the forefront of this transformation in Africa.

## The Opportunity

Africa represents one of the most underserved markets for AI compute infrastructure. With the explosive growth in AI applications worldwide, there's an unprecedented opportunity to build world-class facilities that can serve both regional and global customers.

## Our Approach

### Renewable Energy First
Kenya's geothermal resources provide a unique advantage—reliable, sustainable power at approximately $0.04/kWh.

### Strategic Location
Positioned to serve Africa, Middle East, and Asian markets with competitive latency.

### DePIN Integration
Participating in decentralized compute networks for additional revenue streams.

## Conclusion

The future of AI infrastructure in Africa is being built today. Kenya AI Compute is proud to lead this transformation.

---
*Subscribe for more insights on AI infrastructure development.*`,

    social: `🚀 Exciting developments at Kenya AI Compute!

We're building Africa's premier AI infrastructure powered by renewable energy.

🌍 Strategic location
⚡ $0.04/kWh power costs
🔗 DePIN network integration

The future of AI in Africa starts here.

#AIInfrastructure #GreenTech #Kenya #DePIN #CloudComputing`,

    email: `Subject: Important Update from Kenya AI Compute

Dear Valued Partner,

I hope this message finds you well. I'm excited to share some important updates about our progress at Kenya AI Compute.

**Key Updates:**

1. Phase 1 development is progressing on schedule
2. New strategic partnerships have been secured
3. Equipment procurement is underway

**What This Means for You:**

As a valued member of our community, you'll be among the first to benefit from these developments.

**Next Steps:**

We'll be hosting a webinar next month to provide a detailed update. Stay tuned for the invitation.

Thank you for your continued support.

Best regards,
The Kenya AI Compute Team

---
Kenya AI Compute | Building Africa's AI Future
www.kenyaaicompute.com`,
  };

  return templates[request.contentType] || templates.news;
}
