"use client";

import { useMemo, useState } from "react";
import { projects } from "@/config/projects";
import { ProjectCard } from "./ProjectCard";

const categories = ["All", "AI / Agentic", "Full Stack", "Automation", "Systems / Developer Tools", "Hackathons"];

export function ProjectFilters() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((project) => (project.categories as readonly string[]).includes(active)),
    [active],
  );

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-md border px-2.5 py-1.5 text-xs transition ${
              active === category
                ? "border-foreground/30 bg-surface-hover text-foreground"
                : "border-border text-muted hover:bg-surface"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="divide-y divide-border border-y border-border">
        {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
