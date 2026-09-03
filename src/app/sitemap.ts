import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/features", "/about", "/download"].map((path) => ({
    url: `https://www.spark4speech.com${path}`,
    lastModified,
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.8 : 1,
  }));
}
