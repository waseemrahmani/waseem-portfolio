export type SpotifyTrack = {
  playing: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt?: string;
  spotifyUrl?: string;
  playedAt?: string;
};
