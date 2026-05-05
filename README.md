# portfolio

Minimalist one-page portfolio — a single static page with links to my socials,
plus a privacy notice page.

Live: [https://valentingrenier.fr](https://valentingrenier.fr)

## Stack

- [Astro](https://astro.build/) (static output)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `@fontsource`
- SCSS, no UI framework
- [Plausible](https://plausible.io/) — cookieless analytics

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serves dist/
```

Requires Node `>=20` (matches `.node-version`).

## Edit content

| What | Where |
| --- | --- |
| Links, name, tagline | [src/pages/index.astro](src/pages/index.astro) |
| Privacy notice copy | [src/pages/privacy.astro](src/pages/privacy.astro) |
| Window chrome / footer | [src/layouts/Terminal.astro](src/layouts/Terminal.astro) |
| Colors / motion tokens | [src/styles/_tokens.scss](src/styles/_tokens.scss) |
| Layout & components | [src/styles/_page.scss](src/styles/_page.scss) |

## Deploy (Vercel)

The project is configured for [Vercel](https://vercel.com/) static deploys.

1. Push the repo to GitHub.
2. Import the repo in Vercel — the framework is auto-detected as Astro.
3. Build settings (auto-filled):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Push to `main` to deploy.

Headers (security + cache) and clean URLs are configured in
[vercel.json](vercel.json):

- `cleanUrls: true` — `/privacy/index.html` is served at `/privacy`
- `trailingSlash: false` — `/privacy/` redirects to `/privacy`
- `Cache-Control: public, max-age=31536000, immutable` on `/_astro/*` (hashed assets)
- Baseline security headers: `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`

## Contact

See [studio-val.fr](https://studio-val.fr).
