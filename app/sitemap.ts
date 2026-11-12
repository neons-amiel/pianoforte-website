import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Phase 2: add /pianos/[slug] and /showrooms/[slug] pages here for per-instrument and local SEO.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "daily", priority: 1 }];
}
