"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SpotifyTrack } from "@/types/spotify";

function SpotifyLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      className="spotify-logo"
      fill="currentColor"
    >
      <path d="M12 1.9a10.1 10.1 0 1 0 0 20.2 10.1 10.1 0 0 0 0-20.2Zm4.64 14.58a.74.74 0 0 1-1.02.24c-2.8-1.7-6.32-2.08-10.47-1.14a.74.74 0 1 1-.33-1.44c4.54-1.04 8.43-.61 11.58 1.31.35.21.46.68.24 1.03Zm1.37-3.03a.92.92 0 0 1-1.26.3c-3.2-1.97-8.08-2.54-11.87-1.39a.92.92 0 1 1-.53-1.77c4.33-1.31 9.72-.65 13.37 1.59.43.26.56.83.29 1.27Zm.12-3.17C14.3 8.06 7.63 7.9 3.77 9.07a1.1 1.1 0 0 1-.64-2.1c4.44-1.35 11.82-1.08 16.3 1.58a1.1 1.1 0 1 1-1.3 1.83Z" />
    </svg>
  );
}

export function SpotifyStatus() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);

  async function load() {
    try {
      const response = await fetch("/api/spotify", { cache: "no-store" });
      if (!response.ok) {
        setTrack(null);
        return;
      }
      const data = await response.json();
      setTrack(data.track ?? null);
    } catch {
      setTrack(null);
    }
  }

  useEffect(() => {
    queueMicrotask(() => void load());
    const timer = window.setInterval(() => void load(), 45_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!track) {
    return (
      <div className="spotify-line">
        <SpotifyLogo />
        <span>Last listened</span>
        <span className="spotify-separator">—</span>
        <span className="spotify-muted">Spotify unavailable</span>
      </div>
    );
  }

  return (
    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noreferrer"
      className="spotify-line"
      title="Open in Spotify"
    >
      <SpotifyLogo />
      {track.albumArt && (
        <Image
          src={track.albumArt}
          alt=""
          width={20}
          height={20}
          className="spotify-art"
        />
      )}
      <span>{track.playing ? "Listening now" : "Last listened"}</span>
      <span className="spotify-separator">—</span>
      <span className="spotify-track">
        {track.title} · {track.artist}
      </span>
    </a>
  );
}
