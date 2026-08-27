import Link from "next/link";
import { TechBadge } from "@/components/common/TechBadge";
import type { ProjectEntry } from "@/config/projects";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-transparent px-3 py-5 -mx-3 transition hover:border-border hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted">{project.year}</p>
          <h2 className="mt-1 text-base font-medium">{project.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary">{project.shortDescription}</p>
        </div>
        <span className="text-muted transition group-hover:translate-x-0.5">→</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
      </div>
    </Link>
  );
}
