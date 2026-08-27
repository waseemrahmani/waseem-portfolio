import { ProjectFilters } from "@/components/projects/ProjectFilters";

export const metadata = {
  title: "Projects",
  description: "Selected engineering, AI, automation, and hackathon projects.",
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
