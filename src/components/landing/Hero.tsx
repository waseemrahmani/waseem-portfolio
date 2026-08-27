import Image from "next/image";
import { profile } from "@/config/profile";
import { SpotifyStatus } from "./SpotifyStatus";
import { SocialLinks } from "@/components/common/SocialLinks";
import { CopyEmail } from "@/components/common/CopyEmail";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-identity">
        <Image
          src={profile.profileImage}
          alt={profile.displayName}
          width={110}
          height={110}
          priority
          className="profile-avatar"
        />

        <div className="hero-copy">
          <h1 className="hero-name">{profile.displayName}</h1>
          <p className="hero-role">{profile.headline}</p>
          <CopyEmail />
        </div>
      </div>

      <p className="hero-description">{profile.description}</p>

      <SpotifyStatus />

      <SocialLinks />
    </section>
  );
}
