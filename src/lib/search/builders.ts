import type { SearchDocument } from "./types";
import { projects } from "@/config/projects";
import { experiences } from "@/config/experience";
import { bookSections } from "@/config/personal";
import { skillGroups } from "@/config/skills";

export function buildPageDocuments(): SearchDocument[] {
  return [
    { id: "page-home", title: "Home", category: "page", href: "/", description: "Portfolio homepage" },
    { id: "page-work", title: "Work", category: "page", href: "/work", description: "Work experience and career history" },
    { id: "page-projects", title: "Projects", category: "page", href: "/projects", description: "Selected engineering and AI projects" },
    { id: "page-resume", title: "Resume", category: "resume", href: "/resume", description: "Professional resume and download" },
    { id: "page-personal", title: "Personal", category: "page", href: "/personal", description: "Personal reading shelf and books" },
    { id: "page-contact", title: "Contact", category: "page", href: "/contact", description: "Get in touch" },
  ];
}

export function buildProjectDocuments(): SearchDocument[] {
  return projects.map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    category: "project" as const,
    href: `/projects/${p.slug}`,
    description: p.shortDescription,
    keywords: [...p.technologies, ...p.categories, String(p.year)],
    content: [
      p.achievement?.title,
      p.achievement?.organization,
      p.achievement?.prize,
    ].filter(Boolean).join(" "),
  }));
}

export function buildExperienceDocuments(): SearchDocument[] {
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return experiences.map((e) => ({
    id: `work-${slugify(e.company)}-${slugify(e.role)}`,
    title: e.company,
    category: "work" as const,
    href: `/work`,
    description: `${e.role} · ${e.period}`,
    section: e.company,
    keywords: [...e.technologies, e.role, e.location, e.workMode, e.period],
    content: [e.summary, ...e.bullets].join(" "),
  }));
}

export function buildBookDocuments(): SearchDocument[] {
  const docs: SearchDocument[] = [];
  for (const section of bookSections) {
    for (const book of section.books) {
      docs.push({
        id: `book-${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: book.title,
        category: "personal" as const,
        href: `/personal#${section.slug}`,
        description: book.author ? `${book.author} · ${book.status}` : book.status,
        keywords: [book.status, section.title, book.author].filter(Boolean) as string[],
      });
    }
  }
  return docs;
}

export function buildTechDocuments(): SearchDocument[] {
  const docs: SearchDocument[] = [];
  for (const group of skillGroups) {
    docs.push({
      id: `tech-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      title: group.title,
      category: "tech" as const,
      href: "/#tech-stack",
      description: group.items.join(" · "),
      keywords: [...group.items],
    });
  }
  return docs;
}

export function buildSearchIndex(): SearchDocument[] {
  return [
    ...buildPageDocuments(),
    ...buildProjectDocuments(),
    ...buildExperienceDocuments(),
    ...buildBookDocuments(),
    ...buildTechDocuments(),
  ];
}
