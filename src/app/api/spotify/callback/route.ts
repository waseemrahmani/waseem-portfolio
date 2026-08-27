import { NextResponse } from "next/server";
import { exchangeSpotifyCode, spotifyRedirectUri } from "@/lib/spotify-auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const expectedState = request.headers.get("cookie")?.match(/(?:^|;\s*)spotify_oauth_state=([^;]+)/)?.[1];

  if (error) {
    return new NextResponse(`Spotify authorization failed: ${error}`, { status: 400 });
  }

  if (!code || !state || !expectedState || state !== expectedState) {
    return new NextResponse("Invalid Spotify authorization state.", { status: 400 });
  }

  try {
    const token = await exchangeSpotifyCode(code);

    if (!token.refresh_token) {
      return new NextResponse(
        "Spotify did not return a refresh token. Re-authorize the app and make sure offline access is available.",
        { status: 400 },
      );
    }

    const safeToken = token.refresh_token.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Spotify connected</title>
<style>
body{margin:0;background:#0d0d0d;color:#eee;font-family:Arial,sans-serif;padding:40px}
main{max-width:760px;margin:0 auto}
code,pre{display:block;background:#151515;border:1px solid #292929;border-radius:8px;padding:16px;overflow:auto}
p{color:#aaa;line-height:1.6}
h1{font-size:28px}
</style>
</head>
<body>
<main>
<h1>Spotify connected</h1>
<p>Copy the refresh token below into your local <code>.env.local</code> as <code>SPOTIFY_REFRESH_TOKEN</code>.</p>
<pre id="token">${safeToken}</pre>
<p>Redirect URI used: <code>${spotifyRedirectUri()}</code></p>
<p>After saving <code>.env.local</code>, restart your Next.js dev server.</p>
</main>
</body>
</html>`;

    const response = new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });

    response.cookies.set("spotify_oauth_state", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Spotify connection failed.";
    return new NextResponse(message, { status: 400 });
  }
}
