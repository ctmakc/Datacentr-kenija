import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://kenyaaicompute.com";
const locales = ["en", "zh", "ru"];

// All static routes
const routes = [
  "",
  "/about",
  "/about/vision",
  "/about/team",
  "/about/story",
  "/about/roadmap",
  "/project",
  "/datacenter",
  "/compute",
  "/compute/pricing",
  "/compute/depin",
  "/compute/depin/render-network",
  "/compute/depin/akash",
  "/compute/depin/io-net",
  "/compute/depin/gensyn",
  "/compute/depin/bittensor",
  "/investors",
  "/investors/calculator",
  "/partners",
  "/contact",
  "/news",
  "/careers",
  "/resources",
  "/market",
  "/legal/terms",
  "/legal/privacy",
  "/legal/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale and route
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route.includes("/legal") ? 0.3 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            zh: `${baseUrl}/zh${route}`,
            ru: `${baseUrl}/ru${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
