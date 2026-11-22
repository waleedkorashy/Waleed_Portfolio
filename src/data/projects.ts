import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    name: 'MediPass+',
    status: 'In Development',
    description:
      "MediPass+ is a medical history platform with visit-scoped doctor access. Patients, doctors, clinic staff, and admins work from one system, while a doctor can read a patient's record only during an approved visit.",
    purpose:
      'The project is designed to demonstrate secure, role-based healthcare workflows — Clean Architecture, ASP.NET Identity + JWT, encrypted diagnosis text, an append-only audit log, and integration-tested visit-access and booking rules.',
    technologies: [
      'C#',
      'ASP.NET Core 10',
      'EF Core',
      'SQL Server',
      'ASP.NET Identity',
      'JWT',
      'xUnit',
      'Testcontainers',
      'Swagger/OpenAPI',
    ],
    image: {
      src: '/assets/projects/MediPass-preview.svg',
      width: 1600,
      height: 900,
      alt: 'MediPass+ medical history platform logo cover',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/MediPass-Plus/MediPassPlus',
    },
  },
  {
    name: 'OutfitMaker',
    status: 'Completed',
    description:
      'AI-powered fashion e-commerce platform — a full-stack storefront with live stock, real orders, and two AI features: Find My Size (predicts your fit from body measurements) and AI Style Finder (upload a photo, get visually similar products from the catalog).',
    purpose:
      'The project is designed to demonstrate full-stack development for product-based businesses, including a commerce API, JWT authentication, and integrated AI shopping flows.',
    technologies: [
      'C#',
      'ASP.NET Core (.NET 10)',
      'EF Core',
      'SQL Server',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Docker',
      'Cloudflare',
      'AI integration',
    ],
    image: {
      src: '/assets/projects/OutfitMaker-preview.jpg',
      srcSet:
        '/assets/projects/OutfitMaker-preview-800.webp 800w, /assets/projects/OutfitMaker-preview-1600.webp 1600w',
      width: 1911,
      height: 869,
      alt: 'OutfitMaker project screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/OutfitMaker',
      live: 'https://outfit-maker.wqorashy.workers.dev/',
    },
  },
  {
    name: 'TaskFlow',
    status: 'Completed',
    description:
      'TaskFlow is a real-time Kanban project management application that supports project organization through boards, columns, tasks, comments, labels, due dates, and role-based access.',
    purpose:
      'The project is designed to demonstrate real-time web application development, API-based architecture, authentication and authorization, and database-backed project workflows.',
    technologies: [
      'C#',
      'ASP.NET Core 10',
      'EF Core',
      'PostgreSQL (Neon)',
      'Angular 22',
      'TypeScript',
      'SignalR',
      'ASP.NET Identity',
      'JWT',
      'Cloudflare Pages',
      'Windows/IIS hosting',
    ],
    image: {
      src: '/assets/projects/taskflow-preview.jpg',
      srcSet:
        '/assets/projects/taskflow-preview-800.webp 800w, /assets/projects/taskflow-preview-1600.webp 1600w',
      width: 1918,
      height: 857,
      alt: 'TaskFlow project screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/TaskFlow',
      live: 'https://taskflow-d6o.pages.dev',
    },
  },
  {
    name: 'NOVA',
    status: 'Completed',
    description:
      'NOVA is a single-page landing site for a fictional furniture brand — a quiet, editorial-leaning portfolio piece with warm paper tones, a serif display face, and photography doing most of the talking. It is frontend-only: no backend, no CMS, and no fabricated social proof.',
    purpose:
      'The project is designed to demonstrate front-end craft with a deliberately small dependency footprint — modern Angular with signal-driven, zoneless change detection, a token-based SCSS design system, and WCAG AA accessibility.',
    technologies: ['Angular 22', 'TypeScript 6.0', 'SCSS', 'Vitest 4', 'Cloudflare Pages'],
    image: {
      src: '/assets/projects/Nova-preview.jpg',
      srcSet:
        '/assets/projects/Nova-preview-800.webp 800w, /assets/projects/Nova-preview-1600.webp 1600w',
      width: 1887,
      height: 867,
      alt: 'NOVA landing page screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/NOVA',
      live: 'https://nova-furniture.pages.dev',
    },
  },
]