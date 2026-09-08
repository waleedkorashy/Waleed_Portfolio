import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    name: 'TaskFlow',
    status: 'In Development',
    description:
      'TaskFlow is a real-time Kanban project management application being developed to support project organization through boards, columns, tasks, comments, labels, due dates, and role-based access.',
    purpose:
      'The project is designed to demonstrate real-time web application development, API-based architecture, authentication and authorization, and database-backed project workflows.',
    technologies: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'PostgreSQL',
      'ASP.NET Core Identity',
      'JWT authentication',
      'Angular',
      'SignalR',
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
    name: 'ShopSphere',
    status: 'In Development',
    description:
      'ShopSphere is an e-commerce platform with an administration dashboard. It is being developed around common online store workflows, including product browsing, search, filtering, pagination, shopping cart behavior, checkout, orders, inventory management, and admin analytics.',
    purpose:
      'The project is designed to demonstrate full-stack development for product-based businesses.',
    technologies: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Angular',
      'JWT authentication',
      'Product image handling',
      'Stripe test-mode integration',
    ],
    image: {
      src: '/assets/projects/shopsphere-preview.jpg',
      alt: 'ShopSphere project screenshot',
      isAvailable: false,
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
