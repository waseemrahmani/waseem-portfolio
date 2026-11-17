import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/config/projects";
import { getProjectBySlug, getProjectContent } from "@/lib/projects";
import { TechBadge } from "@/components/common/TechBadge";
import { ProjectMdx } from "@/components/projects/ProjectMdx";

const siteUrl = "https://waseemrahmani.vercel.app";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Waseem Rahmani`,
      description: project.shortDescription,
      url: canonicalUrl,
      siteName: "Waseem Rahmani",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Waseem Rahmani`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const content = getProjectContent(slug);

  return (
    <div className="site-container page-shell project-detail-page">
      <header className="page-header">
        <Link href="/projects" className="section-link project-back">← Projects</Link>
        <p className="eyebrow project-year">{project.year}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lead">{project.shortDescription}</p>

        <div className="project-tech-list">
          {project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="section-link">GitHub ↗</a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="section-link">Live demo ↗</a>
          )}
        </div>

        {project.achievement && (
          <div className="project-award">
            <p>{project.achievement.title}</p>
            <p>{project.achievement.organization}</p>
            {project.achievement.prize && <p>{project.achievement.prize}</p>}
          </div>
        )}
      </header>

      <div className="project-content-divider">
        {content ? <ProjectMdx source={content.content} /> : <p className="project-empty">Project case study content is not added yet.</p>}
      </div>
    </div>
  );
}
