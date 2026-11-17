import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/config/profile";
import { Quote } from "@/components/common/Quote";
import { XLogo } from "@/components/common/XLogo";

export function Footer() {
  const navigation = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Projects", "/projects"],
    ["Resume", "/resume"],
    ["Personal", "/personal"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <div className="site-container quote-wrap">
        <Quote />
      </div>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <p className="footer-heading">Navigate</p>
            <div className="footer-links-grid">
              {navigation.map(([label, href]) => (
                <Link key={href} href={href} className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-heading">Connect</p>
            <div className="footer-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" className="footer-social" data-social="github" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-social" data-social="linkedin" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={profile.x} target="_blank" rel="noreferrer" className="footer-social" data-social="x" aria-label="X">
                <XLogo />
              </a>
              <a href={`mailto:${profile.email}`} className="footer-social" data-social="email" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} {profile.displayName}. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
