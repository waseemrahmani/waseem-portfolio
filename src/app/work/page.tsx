import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/work/ExperienceEntry";
import { experiences } from "@/config/experience";
import { achievements, leadership } from "@/config/achievements";
import { Section } from "@/components/common/Section";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Work and Experience",
  description: "Explore Waseem Rahmani's software engineering and AI experience, internships, projects, achievements, and technical leadership.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="site-container page-shell work-page">
      <header className="page-header">
        <p className="eyebrow">Work</p>
        <h1 className="page-title">My work experience.</h1>
        <p className="page-lead">Professional work across AI, software engineering, automation, and technical communities.</p>
      </header>

      <div className="work-sections">
        {experiences.map((item) => (
          <ScrollReveal key={`${item.company}-${item.role}`}>
            <ExperienceEntry item={item} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <section className="work-section-block">
          <Section title="Achievements">
            <div className="achievement-list">
              {achievements.map((item) => (
                <div key={`${item.event}-${item.title}`} className="achievement-row">
                  <div className="achievement-place">{item.title}</div>
                  <div className="achievement-content">
                    <p className="reference-company">{item.event}</p>
                    <p className="reference-role">{item.organization}</p>
                    <p className="achievement-detail">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="work-section-block">
          <Section title="Leadership & Community">
            <div className="leadership-list">
              {leadership.map((item) => (
                <div key={`${item.organization}-${item.title}`} className="leadership-row">
                  <p className="reference-company">{item.title}</p>
                  <p className="reference-role">{item.organization}</p>
                  {item.period && <p className="leadership-period">{item.period}</p>}
                  <p className="achievement-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </Section>
        </section>
      </ScrollReveal>
    </div>
  );
}
