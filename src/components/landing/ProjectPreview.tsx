import Link from "next/link";
import { projects } from "@/config/projects";
import { Section } from "@/components/common/Section";

export function ProjectPreview() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="reference-section">
      <Section title="Projects">
        <div className="project-list">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-item"
            >
              <div className="project-item-main">
                <p className="reference-company">{project.title}</p>
                <p className="project-summary">{project.shortDescription}</p>
              </div>
              <span className="project-arrow">→</span>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="center-button">Show all projects</Link>
      </Section>
    </section>
  );
}
