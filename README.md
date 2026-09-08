# Waleed Korashy Portfolio

Standalone React, Vite, and TypeScript portfolio website for Waleed Ahmed Korashy.

This project is intentionally lightweight and static. It is separate from the TaskFlow application repository and is ready for free static hosting (Vercel, Netlify, Cloudflare Pages, or GitHub Pages).

## Current Scope

- Single-page portfolio with section navigation (Hero, About, Skills, Services, Work, Contact)
- Typed profile, project, skill, and service data in `src/data`
- Honest project cards: TaskFlow is the only project with a verified GitHub repository link; ShopSphere and BookIt are marked `In Development` with placeholders until their repositories and features are confirmed
- Responsive layout, reduced-motion support, and basic SEO/Open Graph metadata
- SVG favicon and `theme-color`

Project features, screenshots, and live demos are only added once they are confirmed, so the site never claims unverified work.

## Commands

```bash
npm install
npm run dev      # local development server
npm run lint     # ESLint check
npm run build    # type-check + production build (outputs to dist/)
npm run preview  # preview the production build locally
```

## Deploy (free)

### Option A - Vercel (recommended, zero config)

1. Push this repository to GitHub.
2. Go to https://vercel.com and click "Add New > Project".
3. Import the repo. Vercel auto-detects Vite; keep defaults (build `npm run build`, output `dist`).
4. Deploy. You get a `https://<project>.vercel.app` URL and CI/CD on every push.

### Option B - Netlify

1. Push to GitHub, then go to https://netlify.com > "Add new site > Import an existing project".
2. Build command `npm run build`, publish directory `dist`.
3. Optional later: connect a custom domain and set the site title in Site settings.

### Option C - Cloudflare Pages

1. Push to GitHub, then set up a Pages project at https://dash.cloudflare.com.
2. Framework preset: Vite. Build command `npm run build`, output directory `dist`.

### Option D - GitHub Pages

1. On GitHub: repo Settings > Pages > Source = GitHub Actions, then create a workflow that runs `npm run build` and publishes `dist`.
2. Note: the site uses root-absolute asset paths, so it is easiest when served from a custom domain or a root-level page. For a repo-project page (`https://<user>.github.io/<repo>/`), also set `base: '/<repo>/'` in `vite.config.ts` before deploying.

## Notes

Portfolio projects are marked as `In Development` until their completed features, visuals, links, and outcomes are confirmed.