import { TechBadge } from "@/components/common/TechBadge";
import { StatusBadge } from "@/components/common/StatusBadge";
import type { Experience } from "@/config/experience";

export function ExperienceEntry({ item }: { item: Experience }) {
  return (
    <article className="work-experience-entry">
      <div className="work-experience-head">
        <div>
          <div className="experience-company-line">
            <h2 className="reference-company">{item.company}</h2>
            {item.current === true && <StatusBadge>Working</StatusBadge>}
          </div>
          <p className="reference-role">{item.role}</p>
        </div>
        <div className="reference-meta">
          <p>{item.period}</p>
          <p>{item.location}</p>
          <p>({item.workMode})</p>
        </div>
      </div>

      <div className="work-experience-body">
        <div className="work-detail-block">
          <p className="detail-heading">Overview</p>
          <p className="detail-copy">{item.summary}</p>
        </div>

        <div className="work-detail-block">
          <p className="detail-heading">Technologies &amp; Tools</p>
          <div className="experience-tech-grid">
            {item.technologies.map((tech) => (
              <TechBadge key={tech} expandable>
                {tech}
              </TechBadge>
            ))}
          </div>
        </div>

        <div className="work-detail-block">
          <p className="detail-heading">What I&apos;ve done</p>
          <ul className="experience-bullets">
            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
