import type { Metadata } from "next";
import "./about.css";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/config/profile";
import { experiences } from "@/config/experience";
import { achievements } from "@/config/achievements";

export const metadata: Metadata = {
  title: "About Waseem Rahmani",
  description:
    "Learn about Waseem Rahmani, a software engineer working across AI systems, agentic workflows, full-stack development, automation, and developer tools.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Waseem Rahmani | Software Engineer × AI",
    description:
      "Professional profile, engineering experience, projects, and achievements of Waseem Rahmani.",
    url: "/about",
    type: "profile",
  },
};

const siteUrl = "https://waseemrahmani.vercel.app";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": siteUrl + "/about#profilepage",
  url: siteUrl + "/about",
  name: "About Waseem Rahmani",
  mainEntity: { "@id": siteUrl + "/#person" },
};

const focusAreas = [
  "AI engineering and agentic systems",
  "Full-stack software development",
  "Developer tools and automation",
  "Applied machine learning",
  "Backend systems and API design",
];

export default function AboutPage() {
  return (
    <div className="site-container page-shell about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Waseem Rahmani</h1>
        <p className="page-lead">{profile.headline}. I build intelligent software systems, automation workflows, and developer tools that solve practical problems.</p>
      </header>

      <section className="about-profile" aria-labelledby="about-profile-heading">
        <div className="about-profile-image">
          <Image
            src={profile.profileImage}
            alt="Waseem Rahmani"
            width={144}
            height={144}
            priority
          />
        </div>
        <div>
          <h2 id="about-profile-heading">Software engineering, AI, and practical problem solving</h2>
          <p>
            I work across software engineering and applied AI, building systems that connect useful models,
            reliable backend services, and clear user experiences. My interests include agentic workflows,
            automation, developer tooling, and machine learning applications.
          </p>
          <p>
            This website documents selected projects, professional experience, technical interests, and
            achievements. It is the central place to explore my work and find my professional profiles.
          </p>
          <div className="about-social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.x} target="_blank" rel="noreferrer">X</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="focus-heading">
        <h2 id="focus-heading">Areas of focus</h2>
        <ul>
          {focusAreas.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>

      <section className="about-section" aria-labelledby="experience-heading">
        <div className="about-section-heading">
          <h2 id="experience-heading">Professional experience</h2>
          <Link href="/work">View all experience</Link>
        </div>
        <div className="about-entry-list">
          {experiences.map((item) => (
            <article className="about-entry" key={`${item.company}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company} · {item.location}</p>
              </div>
              <span>{item.period}</span>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="recognition-heading">
        <div className="about-section-heading">
          <h2 id="recognition-heading">Selected recognition</h2>
          <Link href="/work">More achievements</Link>
        </div>
        <div className="about-entry-list">
          {achievements.slice(0, 4).map((item) => (
            <article className="about-entry" key={`${item.event}-${item.title}`}>
              <div>
                <h3>{item.title} · {item.event}</h3>
                <p>{item.organization}</p>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-next-links" aria-label="Explore more">
        <h2>Explore my work</h2>
        <p>Browse selected projects, read about my experience, or get in touch.</p>
        <div>
          <Link href="/projects">Projects</Link>
          <Link href="/work">Experience</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </div>
  );
}
