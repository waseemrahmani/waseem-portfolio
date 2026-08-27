import Link from "next/link";
import { Section } from "@/components/common/Section";

export function PersonalPreview() {
  return (
    <section className="reference-section">
      <Section title="Personal">
        <div className="personal-list">
          <Link href="/personal" className="personal-row">
            <div>
              <p className="reference-company">Books</p>
              <p className="personal-description">Fiction and non-fiction.</p>
            </div>
            <span className="project-arrow">→</span>
          </Link>
        </div>
      </Section>
    </section>
  );
}
