import { Section } from "@/components/common/Section";
import { skillGroups } from "@/config/skills";

export function TechStack() {
  return (
    <section className="reference-section">
      <Section title="Tech Stack / Tools">
        <div className="skills-reference">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-line">
              <p className="skill-group-title">{group.title}</p>
              <p className="skill-group-items">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
