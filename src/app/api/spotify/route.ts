import { NextResponse } from "next/server";
import { getSpotifySnapshot } from "@/lib/spotify";

export async function GET() {
  const track = await getSpotifySnapshot();
  return NextResponse.json(
    { track },
    { headers: { "Cache-Control": "no-store" } },
  );
}
