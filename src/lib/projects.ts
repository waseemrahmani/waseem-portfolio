import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { projects } from "@/config/projects";

const contentRoot = path.join(process.cwd(), "src/content/projects");

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectContent(slug: string) {
  const filePath = path.join(contentRoot, slug, "index.mdx");
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    data,
  };
}
