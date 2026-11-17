# Waseem Rahmani Portfolio

A Ramx-inspired personal portfolio for Waseem Rahmani.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- next-themes
- MDX
- Vercel-ready

## Routes

- `/`
- `/about`\n- `/work`
- `/projects`
- `/projects/[slug]`
- `/resume`
- `/contact`
- `/personal`

## SEO

- Global metadata and canonical metadata base are configured in `src/app/layout.tsx`.
- Person and WebSite JSON-LD structured data are emitted from the root layout.
- `src/app/sitemap.ts` generates the XML sitemap, including project detail pages.
- `src/app/robots.ts` generates robots directives and references the sitemap.
- Individual project pages generate title, description, canonical, Open Graph, and Twitter metadata.

The production URL is currently configured as `https://waseemrahmani.vercel.app`. Update the site URL in the SEO route/layout files if the production domain changes.

## Before production

1. Replace `public/images/profile/waseem-placeholder.svg` with the final profile image and ensure `src/config/profile.ts` points to the final asset.
2. Replace project placeholder visuals with actual screenshots/diagrams.
3. Reconcile and replace the published resume PDF with the canonical final version.
4. Add the IIC Letter of Recommendation under `public/documents/` if it should be public.
5. Add Spotify credentials to `.env.local`.
6. Configure contact delivery inside `src/app/api/contact/route.ts`.
7. Verify the LinkedIn, GitHub, and X profile URLs in `src/config/profile.ts` before adding them to Person structured data.
8. Run `npm install`, `npm run dev`, and `npm run build`.

## Spotify

The app expects:

```env
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

The client-side site only receives normalized playback metadata from `/api/spotify`.

## Path alias

The project uses the TypeScript alias `@/*` → `src/*`, configured in `tsconfig.json`.

## Spotify local setup

1. Create a Spotify Developer app.
2. In the app settings, add this exact redirect URI:
   `http://127.0.0.1:3000/api/spotify/callback`
3. Put the Client ID and Client Secret in `.env.local`.
4. Start the site with `npm run dev`.
5. Open `http://127.0.0.1:3000/api/spotify/login`.
6. Sign in with the Spotify account that owns the music history you want to show.
7. Approve the requested playback-history scopes.
8. Copy the refresh token shown by the callback page into `.env.local` as `SPOTIFY_REFRESH_TOKEN`.
9. Restart `npm run dev`.
10. Visit the homepage. The Spotify line should show the currently playing track or the last played track.

Spotify currently requires a loopback IP such as `127.0.0.1` for local HTTP redirects rather than `localhost`.
