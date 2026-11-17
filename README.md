# Waseem Rahmani Portfolio

A personal portfolio for Waseem Rahmani.

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
- `/about`
- `/work`
- `/projects`
- `/projects/[slug]`
- `/resume`
- `/contact`
- `/personal`

## SEO

- Canonical production origin: `https://waseemrahmani.vercel.app`.
- Global title, description, canonical metadata, robots directives, Open Graph, and Twitter metadata are configured in `src/app/layout.tsx`.
- Person and WebSite JSON-LD connect the portfolio to its owner and public profiles.
- `/about` is the dedicated professional profile page and includes `ProfilePage` structured data.
- `src/app/sitemap.ts` generates the XML sitemap, including the About page and project detail pages.
- `src/app/robots.ts` generates robots directives and references the sitemap.
- Individual project pages generate unique metadata, CreativeWork structured data, and project-specific social preview images.
- `src/app/opengraph-image.tsx` and `src/app/icon.tsx` generate the website social preview and favicon.
- Public identity and social profile URLs are centralized in `src/config/profile.ts`.

## Before production

1. Verify the LinkedIn and X URLs in `src/config/profile.ts` against the live profiles.
2. Replace project placeholder visuals with actual screenshots and architecture diagrams.
3. Reconcile and replace the published resume PDF with the canonical final version.
4. Add the IIC Letter of Recommendation under `public/documents/` if it should be public.
5. Add Spotify credentials to `.env.local`.
6. Configure contact delivery inside `src/app/api/contact/route.ts`.
7. Verify that each project has its own repository URL before adding links to project cards.
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


## Post-deployment search setup

1. Add the production URL prefix `https://waseemrahmani.vercel.app/` in Google Search Console and verify ownership.
2. Submit `https://waseemrahmani.vercel.app/sitemap.xml`.
3. Inspect the homepage, About page, and each project URL with URL Inspection.
4. Run the Rich Results Test against the About page and a project detail page.
5. Add the site to Bing Webmaster Tools and submit the sitemap.
6. Monitor indexing, branded queries, clicks, impressions, and crawl issues over time.

Search Console can report indexing and search performance; sitemap submission does not guarantee indexing or rankings.
