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
    name: 'BookIt',
    status: 'In Development',
    description:
      'BookIt is a multi-tenant appointment booking system being developed for service-based businesses that need to manage availability, bookings, customers, and business dashboards.',
    purpose:
      'The project is designed to demonstrate SaaS-style application structure, appointment scheduling workflows, booking conflict checking, background processing, and tenant-based data organization.',
    technologies: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Angular',
      'JWT authentication',
      'Hangfire',
      'Email notifications',
    ],
    image: {
      src: '/assets/projects/bookit-preview.jpg',
      alt: 'BookIt project screenshot',
      isAvailable: false,
    },
  },
]
