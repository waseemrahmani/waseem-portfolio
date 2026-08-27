import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/config/profile";
import { XLogo } from "@/components/common/XLogo";

const socials = [
  {
    label: "GitHub",
    handle: "@waseemrahmani",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "@waseemrahmani",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "X",
    handle: "@iwaseemrahmani",
    href: profile.x,
    icon: XLogo,
    external: true,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
];

export function SocialCards() {
  return (
    <div className="social-cards">
      {socials.map(({ label, handle, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          className="social-card"
          data-social={label.toLowerCase()}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          <span className="social-card-icon">
            <Icon size={16} strokeWidth={1.7} />
          </span>
          <div className="social-card-text">
            <p className="social-card-label">{label}</p>
            <p className="social-card-handle">{handle}</p>
          </div>
          <ArrowRight size={14} className="social-card-arrow" />
        </a>
      ))}
    </div>
  );
}
