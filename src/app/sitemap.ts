import type { MetadataRoute } from "next";
import { projects } from "@/config/projects";

const siteUrl = "https://waseemrahmani.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/resume`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/personal`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
