export type ProjectEntry = {
  slug: string;
  title: string;
  shortDescription: string;
  year: number;
  categories: readonly string[];
  featured: boolean;
  technologies: readonly string[];
  github?: string;
  demo?: string;
  achievement?: {
    title: string;
    organization: string;
    prize?: string;
  };
};

export const projects: readonly ProjectEntry[] = [
  {
    slug: "agentic-bug-hunter",
    title: "Agentic Bug Hunter",
    shortDescription:
      "Agentic C++ vulnerability detection using AST-based reasoning and controlled tool invocation.",
    year: 2026,
    categories: ["AI / Agentic", "Systems / Developer Tools", "Hackathons"],
    featured: true,
    technologies: ["Python", "C++", "C++ AST", "LangGraph", "MCP"],
    achievement: {
      title: "1st Place",
      organization: "CircuitAvishkar 2.0 · IEEE CAS × Infineon Technologies",
      prize: "₹50,000 prize",
    },
  },
  {
    slug: "docuflow",
    title: "DocuFlow",
    shortDescription:
      "AI-powered invoice automation that reduced daily manual data entry from roughly 3 hours to under 20 minutes.",
    year: 2026,
    categories: ["AI / Agentic", "Automation", "Full Stack"],
    featured: true,
    technologies: ["FastAPI", "React", "Anthropic", "OpenAI", "Gemini", "Ollama"],
  },
  {
    slug: "phishinglens",
    title: "PhishingLens",
    shortDescription:
      "Multimodal phishing detection combining NLP, computer vision, graph analysis, and threat intelligence.",
    year: 2025,
    categories: ["AI / Agentic", "Full Stack", "Systems / Developer Tools"],
    featured: true,
    technologies: ["Python", "FastAPI", "React", "Docker", "Kubernetes", "DistilBERT", "YOLOv5/v8", "GNN"],
  },
  {
    slug: "au-alumni-agentic-platform",
    title: "AU Alumni Agentic Platform",
    shortDescription:
      "Agentic platform for matching students with alumni, surfacing opportunities, and following up automatically.",
    year: 2026,
    categories: ["AI / Agentic", "Hackathons"],
    featured: false,
    technologies: ["LangGraph", "RAG", "ChromaDB", "Vector Databases"],
    achievement: {
      title: "1st Place",
      organization: "AU@100 University Hackathon",
    },
  },
  {
    slug: "acadease-360",
    title: "AcadEase 360°",
    shortDescription:
      "University administration automation replacing paper-heavy workflows for approvals, attendance, certificates, and records.",
    year: 2026,
    categories: ["Full Stack", "Automation", "Hackathons"],
    featured: false,
    technologies: ["React", "FastAPI", "Python", "SQL", "REST APIs"],
    achievement: {
      title: "Runner-Up",
      organization: "AURAX 2K26",
    },
  },
  {
    slug: "daily-affairs",
    title: "Daily Affairs",
    shortDescription:
      "AI-powered current-affairs learning platform focused on filtering, summarization, retention, and timely updates.",
    year: 2025,
    categories: ["AI / Agentic", "Automation", "Hackathons"],
    featured: false,
    technologies: ["Python", "AI / NLP", "REST APIs", "JSON/XML"],
    achievement: {
      title: "1st Place",
      organization: "RTIH Idea Surge Ideathon",
    },
  },
];
