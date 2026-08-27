type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
};

type SpotifyImage = {
  url: string;
  width: number | null;
  height: number | null;
};

type SpotifyArtist = {
  name: string;
};

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`,
  ).toString("base64");

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    },
  );

  const text = await response.text();

  if (!response.ok) {
    return null;
  }

  return JSON.parse(text) as SpotifyTokenResponse;
}

export async function getSpotifySnapshot() {
  const token = await getSpotifyAccessToken();

  if (!token) {
    return null;
  }

  const headers = {
    Authorization: `Bearer ${token.access_token}`,
  };

  /*
   * -------------------------------------------------------
   * 1. Check current playback
   * -------------------------------------------------------
   */

  const current = await fetch(
    "https://api.spotify.com/v1/me/player",
    {
      headers,
      cache: "no-store",
    },
  );

  const currentText = await current.text();

  if (current.status === 200) {
    const data = JSON.parse(currentText);

    if (data?.item?.type === "track") {
      const item = data.item;

      return {
        playing: Boolean(data.is_playing),
        title: item.name as string,
        artist: (item.artists as SpotifyArtist[])
          .map((a) => a.name)
          .join(", "),
        album: item.album?.name ?? "",
        albumArt: (
          item.album?.images as SpotifyImage[] | undefined
        )?.[0]?.url,
        spotifyUrl: item.external_urls?.spotify,
      };
    }

  }

  /*
   * -------------------------------------------------------
   * 2. Recently played fallback
   * -------------------------------------------------------
   */

  const recent = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers,
      cache: "no-store",
    },
  );

  const recentText = await recent.text();

  if (!recent.ok) {
    return null;
  }

  const data = JSON.parse(recentText);

  const item = data?.items?.[0];

  if (!item?.track || item.track.type !== "track") {
    return null;
  }

  return {
    playing: false,
    title: item.track.name as string,
    artist: (item.track.artists as SpotifyArtist[])
      .map((a) => a.name)
      .join(", "),
    album: item.track.album?.name ?? "",
    albumArt: (
      item.track.album?.images as SpotifyImage[] | undefined
    )?.[0]?.url,
    spotifyUrl: item.track.external_urls?.spotify,
    playedAt: item.played_at as string | undefined,
  };
}