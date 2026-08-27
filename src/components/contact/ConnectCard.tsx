import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/config/profile";

export function ConnectCard() {
  return (
    <div className="connect-card">
      <p className="connect-heading">Connect</p>

      <div className="connect-visual">
        <Image
          src="/images/contact/workstation.svg"
          alt="Developer workstation"
          width={150}
          height={113}
          priority
        />
      </div>

      <div className="connect-rows">
        <a href={`mailto:${profile.email}`} className="connect-row">
          <span className="connect-icon">
            <Mail size={14} />
          </span>
          <span className="connect-text">
            <p className="connect-label">Email</p>
            <p className="connect-value">{profile.email}</p>
          </span>
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer" className="connect-row">
          <span className="connect-icon">
            <Github size={14} />
          </span>
          <span className="connect-text">
            <p className="connect-label">GitHub ↗</p>
            <p className="connect-value">github.com/iwaseemrahmani</p>
          </span>
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="connect-row">
          <span className="connect-icon">
            <Linkedin size={14} />
          </span>
          <span className="connect-text">
            <p className="connect-label">LinkedIn ↗</p>
            <p className="connect-value">linkedin.com/in/iwaseemrahmani</p>
          </span>
        </a>
      </div>
    </div>
  );
}
