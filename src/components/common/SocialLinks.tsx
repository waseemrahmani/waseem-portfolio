import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/config/profile";
import { XLogo } from "./XLogo";

const links = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "X", href: profile.x, icon: XLogo },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="social-icon"
          data-social={label.toLowerCase()}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          title={label}
        >
          <Icon size={15} strokeWidth={1.7} />
        </a>
      ))}
    </div>
  );
}
