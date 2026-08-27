export const achievements = [
  {
    title: "1st Place",
    event: "CircuitAvishkar 2.0",
    organization: "IEEE CAS × Infineon Technologies",
    detail: "Agentic C++ vulnerability detector · ₹50,000 prize",
  },
  {
    title: "1st Place",
    event: "AU@100 University Hackathon",
    organization: "Andhra University Centenary",
    detail: "Agentic alumni platform",
  },
  {
    title: "1st Place",
    event: "RTIH Idea Surge Ideathon",
    organization: "Ratan Tata Innovation Hub × TiE Vizag",
    detail: "AI current-affairs platform · 50+ teams",
  },
  {
    title: "Runner-Up",
    event: "AURAX 2K26",
    organization: "Andhra University",
    detail: "AcadEase 360°",
  },
  {
    title: "5th Place",
    event: "ELEXCENTRA Hackathon",
    organization: "ELEXCENTRA",
    detail: "AI-agent prompt-injection firewall",
  },
] as const;

export type Leadership = {
  title: string;
  organization: string;
  detail: string;
  period?: string;
};

export const leadership: Leadership[] = [
  {
    title: "Cloud Computing Lead",
    organization: "Google Developer Groups on Campus, Andhra University",
    detail: "Workshops, CTFs, speaker sessions, and peer mentorship engaging 200+ students.",
  },
  {
    title: "Founding Technical Lead",
    organization: "Career Catalyst Forum, Andhra University",
    detail: "Leading the technical vertical and peer preparation programs.",
  },
  {
    title: "Co-Lead, Startup & Entrepreneurship Chapter",
    organization: "codeiam.club, Andhra University",
    period: "Sep 2025 – Present",
    detail: "Co-lead the startup vertical of AU's technical club, supporting student-led ventures and product building.",
  },
  {
    title: "Internship Coordinator",
    organization: "Institution's Innovation Council, Andhra University",
    detail: "Coordinated internship initiatives and interviewed 50+ candidates during the 2025 recruitment drive.",
  },
  {
    title: "Member",
    organization: "TheCommunicons Club",
    detail: "Interviewed 50+ candidates during the 2025 recruitment drive.",
  },
  {
    title: "Member",
    organization: "GirlUp Club",
    detail: "Interviewed 50+ candidates during the 2025 recruitment drive.",
  },
] as const;
