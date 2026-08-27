import Link from "next/link";
import { Section } from "@/components/common/Section";
import { profile } from "@/config/profile";

export function QuickLinks() {
  return (
    <section className="reference-section">
      <Section title="Quick Links">
        <div className="quick-links">
          <Link href="/projects" className="footer-link">Projects</Link>
          <Link href="/work" className="footer-link">Work</Link>
          <Link href="/resume" className="footer-link">Resume</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/personal" className="footer-link">Personal</Link>
          <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </Section>
    </section>
  );
}
