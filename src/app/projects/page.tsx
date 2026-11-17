import type { Metadata } from "next";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore software engineering, AI, agentic systems, automation, and hackathon projects built by Waseem Rahmani.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="site-container page-shell projects-page">
      <header className="page-header">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Things I have built.</h1>
        <p className="page-lead">
          Selected projects across AI, agentic systems, automation, full-stack engineering, and technical problem solving.
        </p>
      </header>
      <ProjectFilters />
    </div>
  );
}
