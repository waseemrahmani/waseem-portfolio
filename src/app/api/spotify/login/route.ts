import { NextResponse } from "next/server";
import { createSpotifyState, spotifyAuthorizeUrl } from "@/lib/spotify-auth";

export async function GET() {
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    return new NextResponse("Spotify credentials are not configured.", { status: 500 });
  }

  const state = createSpotifyState();
  const response = NextResponse.redirect(spotifyAuthorizeUrl(state));

  response.cookies.set("spotify_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 600,
    path: "/",
  });

  return response;
}
