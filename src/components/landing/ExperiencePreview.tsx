"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/config/experience";
import { Section } from "@/components/common/Section";
import { StatusBadge } from "@/components/common/StatusBadge";
import { TechBadge } from "@/components/common/TechBadge";

export function ExperiencePreview() {
  const currentIndex = Math.max(
    0,
    experiences.findIndex(
      (item) => item.current === true
    )
  );

  const [expanded, setExpanded] = useState<number | null>(currentIndex);

  return (
    <section className="reference-section">
      <Section title="Experience">
        <div className="experience-list experience-accordion">
          {experiences.map((item, index) => {
            const isOpen = expanded === index;

            return (
              <article
                key={`${item.company}-${item.role}`}
                className={`experience-item compact ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="experience-row experience-trigger"
                  onClick={() => setExpanded(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="experience-main">
                    <span className="experience-company-line">
                      <span className="reference-company">
                        {item.company}
                      </span>

                      {item.current === true && <StatusBadge>Working</StatusBadge>}

                      <span
                        className="experience-chevron"
                        aria-hidden="true"
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={1.8}
                        />
                      </span>
                    </span>

                    <span className="reference-role">
                      {item.role}
                    </span>
                  </span>

                  <div className="reference-meta">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                    <p>({item.workMode})</p>
                  </div>
                </button>

                <div className="experience-details-wrap">
                  <div className="experience-details">
                    <div className="experience-detail-section">
                      <p className="detail-heading">
                        Technologies &amp; Tools
                      </p>

                      <div className="experience-tech-grid">
                        {item.technologies.map((tech) => (
                          <TechBadge key={tech} expandable>
                            {tech}
                          </TechBadge>
                        ))}
                      </div>
                    </div>

                    <div className="experience-detail-section">
                      <p className="detail-heading">
                        What I&apos;ve done
                      </p>

                      <ul className="experience-bullets">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Link href="/work" className="center-button">
          Show all work experiences
        </Link>
      </Section>
    </section>
  );
}