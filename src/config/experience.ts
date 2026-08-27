export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  workMode: string;
  current?: boolean;
  summary: string;
  technologies: readonly string[];
  bullets: readonly string[];
};

export const experiences: readonly Experience[] = [
  {
    company: "TheDigifac Services",
    role: "AI Engineer",
    period: "Oct 2025 – Present",
    location: "Visakhapatnam, India",
    workMode: "On-Site",
    current: true,
    summary:
      "AI-assisted engineering workflows and legacy-system analysis, with LLM-based documentation, reverse engineering, observability, and security tooling.",
    technologies: ["Python", "LLMs", "LangChain", "LangGraph", "Grafana", "Prometheus"],
    bullets: [
      "Automated SRS generation with LLM workflows, reducing documentation time by 45%.",
      "Extracted 120+ business rules, APIs, and entity relationships from legacy applications with traceability.",
      "Integrated observability and security tooling to improve review and monitoring workflows.",
    ],
  },
  {
    company: "TheDigifac Services",
    role: "Mobile Developer",
    period: "Aug 2025 – Nov 2025",
    location: "Visakhapatnam, India",
    workMode: "On-Site",
    summary:
      "Resolved cross-platform mobile issues, modernized legacy configurations, and improved app stability and loading performance.",
    technologies: ["Android", "iOS", "Java", "Objective-C"],
    bullets: [
      "Resolved 25+ device-specific issues across Android and iOS.",
      "Reduced crash rates by 40% and load time by 28%.",
      "Improved compatibility across 3 major OS versions.",
    ],
  },
  {
    company: "Cogniva Technologies",
    role: "Full Stack Developer",
    period: "Jan 2025 – Sep 2025",
    location: "India",
    workMode: "On-Site",
    summary:
      "Built a SQL-backed gold-loan sanctioning platform with secure workflows, REST APIs, and process automation.",
    technologies: ["TypeScript", "Express", "SQL", "REST APIs"],
    bullets: [
      "Built workflows supporting 1,000+ monthly loan processes.",
      "Designed data models for KYC records, transaction logs, and audit trails.",
      "Automated document and payment processing, reducing manual processing time by 60%.",
    ],
  },
];
