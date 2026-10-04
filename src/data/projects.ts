import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    name: 'TaskFlow',
    status: 'Completed',
    description:
      'TaskFlow is a real-time Kanban project management application that supports project organization through boards, columns, tasks, comments, labels, due dates, and role-based access.',
    purpose:
      'The project is designed to demonstrate real-time web application development, API-based architecture, authentication and authorization, and database-backed project workflows.',
    technologies: [
      'ASP.NET Core 10',
      'EF Core 10',
      'ASP.NET Identity',
      'SignalR',
      'MailKit',
      'Angular 22',
      'Angular CDK',
      'Angular Material',
      'PostgreSQL (Neon)',
      'JWT bearer + email OTP',
      'Cloudflare Pages',
      'Windows/IIS hosting',
    ],
    image: {
      src: '/assets/projects/taskflow-preview.jpg',
      alt: 'TaskFlow project screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/taskflow.git',
      live: 'https://taskflow-d6o.pages.dev',
    },
  },
  {
    name: 'OutfitMaker',
    status: 'Completed',
    description:
      'AI-powered fashion e-commerce platform — a full-stack storefront with live stock, real orders, and two on-device machine-learning features: Find My Size (predicts your fit from body measurements) and AI Style Finder (upload a photo, get visually similar products from the catalog).',
    purpose:
      'The project is designed to demonstrate full-stack development for product-based businesses.',
    technologies: [
      'ASP.NET Core (.NET 10)',
      'EF Core',
      'ASP.NET Core Identity',
      'JWT',
      'SQL Server',
      'React',
      'Tailwind CSS v4',
      'Python',
      'Flask',
      'TensorFlow/Keras (MobileNetV2)',
      'Cloudflare',
      'Windows/IIS hosting',
      'Docker',
    ],
    image: {
      src: '/assets/projects/OutfitMaker-preview.jpg',
      alt: 'OutfitMaker project screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/OutfitMaker',
      live: 'https://outfit-maker.wqorashy.workers.dev/',
    },
  },
  {
    name: 'NOVA',
    status: 'Completed',
    description:
      'NOVA is a single-page landing site for a fictional furniture brand — a quiet, editorial-leaning portfolio piece with warm paper tones, a serif display face, and photography doing most of the talking. It is frontend-only: no backend, no CMS, and no fabricated social proof.',
    purpose:
      'The project is designed to demonstrate front-end craft with a deliberately small dependency footprint — modern Angular with signal-driven, zoneless change detection, a token-based SCSS design system, and WCAG AA accessibility.',
    technologies: [
      'Angular 22',
      'TypeScript 6.0',
      'SCSS',
      'Vitest 4',
      'Cloudflare Pages',
    ],
    image: {
      src: '/assets/projects/Nova-preview.jpg',
      alt: 'NOVA landing page screenshot',
      isAvailable: true,
    },
    links: {
      repository: 'https://github.com/waleedkorashy/NOVA',
      live: 'https://nova-furniture.pages.dev',
    },
  },
]
