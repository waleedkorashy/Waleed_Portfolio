# Waleed Korashy — Full-Stack .NET Developer

Personal portfolio for Waleed Korashy, a full-stack .NET developer in Egypt open to relocation and freelance opportunities. It presents my specialization, skills, and the web applications I build — real-time collaboration, e-commerce, and SaaS-style systems — to potential clients and recruiters.

**Live site:** https://waleed-portfolio.pages.dev/

## What I build

I build practical, business-focused full-stack web applications using **C# / .NET** on the backend and **Angular / React** on the frontend — with clean API architecture, secure authentication, and maintainable code.

## Featured projects

| Project | What it is | Status |
| --- | --- | --- |
| [TaskFlow](https://github.com/waleedkorashy/taskflow) | Real-time Kanban project management tool — boards, tasks, comments, labels, role-based access, and live sync via SignalR. ([live demo](https://taskflow-d6o.pages.dev/)) | Completed |
| [OutfitMaker](https://github.com/waleedkorashy/OutfitMaker) | AI-powered fashion e-commerce platform with on-device ML — Find My Size and AI Style Finder. ([live demo](https://outfit-maker.wqorashy.workers.dev/)) | Completed |
| [NOVA](https://github.com/waleedkorashy/NOVA) | Editorial furniture landing page built with Angular, SCSS, and a token-based design system. ([live demo](https://nova-furniture.pages.dev/)) | Completed |

## This portfolio

Built with **React + TypeScript + Vite**:

- Typed data files in `src/data` for profile, projects, experience, skills, and services
- Responsive layout with a mobile navigation menu and keyboard focus management
- Skip link, reduced-motion support, and WCAG-minded color contrast
- Optimized WebP project images with responsive `srcset` and a full-size lightbox
- SEO metadata, Open Graph/Twitter cards, JSON-LD, sitemap, and robots.txt
- CV preview with page images rendered during the build
- Contact form with a Formspree-compatible endpoint and an email fallback

## Run locally

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Render CV pages and build the production site into `dist` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run render:resume` | Re-render CV page images from the PDF |
| `npm run optimize:images` | Regenerate responsive WebP project/profile images |

## Contact form

Set `VITE_CONTACT_FORM_ENDPOINT` to a form endpoint such as a Formspree form URL. The form posts with `fetch` and includes a honeypot field. If the variable is not set, the form falls back to opening the visitor's email app with a prefilled message.

For local development, add the value to `.env.local`. For GitHub Actions builds, add it as a repository variable named `VITE_CONTACT_FORM_ENDPOINT`.

## Deployment

The site is hosted on Cloudflare Pages. This project was originally created with Direct Upload, so Cloudflare does not allow converting that project to a Git-connected build. Automatic deploys are handled by the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`, which lints, builds, and uploads `dist` to the existing Pages project with Wrangler.

Add these repository secrets in **GitHub → Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN` — Cloudflare API token with **Account → Cloudflare Pages → Edit**
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

The workflow deploys on every push to `main`. For a manual deploy, run `npm run build` and upload the `dist` folder through Cloudflare Pages.

## Contact

- Portfolio: https://waleed-portfolio.pages.dev/
- GitHub: https://github.com/waleedkorashy
- LinkedIn: https://www.linkedin.com/in/waleed-korashy
- Email: wqorashy@gmail.com

---

© Waleed Ahmed Korashy
