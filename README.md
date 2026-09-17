# Waleed Korashy — Full-Stack .NET Developer

Personal portfolio website for Waleed Korashy, a full-stack .NET developer in Egypt open to relocation and freelance opportunities. It presents my specialization, skills, and the web applications I build — real-time collaboration, e-commerce, and SaaS-style systems — to potential clients and recruiters.

**Live site:** https://waleed-portfolio.pages.dev/

## What I build

I build practical, business-focused full-stack web applications using **C# / .NET** on the backend and **Angular / React** on the frontend — with clean API architecture, secure authentication, and maintainable code. I care about understanding the business need first, communicating clearly, and shipping honest, verifiable work.

## Featured projects

| Project | What it is | Status |
| --- | --- | --- |
| [TaskFlow](https://github.com/waleedkorashy/taskflow) | Real-time Kanban project management tool — boards, columns, tasks, drag-and-drop, comments, labels, role-based access, and live sync via SignalR. ([live demo](https://taskflow-d6o.pages.dev/)) | Completed |
| [OutfitMaker](https://github.com/waleedkorashy/OutfitMaker) | AI-powered fashion e-commerce platform with on-device ML — Find My Size (fit prediction) and AI Style Finder (visual product search). ([live demo](https://outfit-maker.wqorashy.workers.dev/)) | Completed |
| BookIt | Multi-tenant appointment booking system (in development) | In Development |

## This portfolio site

Built with **React + TypeScript + Vite**:

- Data-driven — profile, projects, skills, and services are typed data files in `src/data`
- Honest project cards: real screenshots (click to enlarge) and verified, working links only
- Responsive layout, reduced-motion support, and basic SEO/Open Graph metadata
- Every project image offers a full-size lightbox on click

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint check
```

## Deploy

Free static hosting on Cloudflare Pages:

1. `npm run build`
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets
3. Upload the **contents** of `dist/` (index.html, favicon.svg, assets/), not the folder itself

## Contact

- Portfolio: https://waleed-portfolio.pages.dev/
- GitHub: https://github.com/waleedkorashy
- LinkedIn: https://www.linkedin.com/in/waleed-korashy
- Email: wqorashy@gmail.com

---

© Waleed Ahmed Korashy