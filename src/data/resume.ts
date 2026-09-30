import type { CertificationEntry, EducationEntry, ExperienceEntry } from '../types/resume'

export const experience: ExperienceEntry[] = [
  {
    title: 'OutfitMaker — AI-Powered Fashion E-Commerce Platform',
    organization: 'EELU Graduation Project · Rebuilt & Expanded',
    period: '2024 – Present',
    details: [
      'Built and deployed a full-stack fashion storefront: a React + TypeScript (Vite, Tailwind CSS) frontend, an ASP.NET Core REST API with EF Core and SQL Server, and a separate Python Flask AI microservice — live end-to-end.',
      'Implemented "Find My Size", a RandomForest classifier that predicts a shopper’s correct clothing size from body measurements.',
      'Implemented "AI Style Finder", a MobileNetV2-based visual similarity search: shoppers upload a photo and get the closest-matching catalog items via k-nearest-neighbours.',
      'Delivered real commerce logic — accounts, favorites, and cart/checkout with atomic per-size stock reservation — secured with JWT authentication and engineered to run within free-tier hosting limits.',
    ],
  },
  {
    title: 'Back-End Development Bootcamp — ASP.NET',
    organization: 'Learnit Academy & Career 180',
    period: '2024 – 2025',
    details: [
      'Built and maintained web applications across ASP.NET Core, ASP.NET MVC, ASP.NET WebForms, and ASP.NET Web API, applying OOP and SOLID design principles.',
      'Worked with Entity Framework and LINQ against SQL Server/T-SQL for data access, and built/consumed REST APIs (JSON) tested with Postman.',
      'Built front-end interfaces with HTML5, CSS3, JavaScript, jQuery, and Bootstrap, with introductory exposure to Angular/React, and deployed applications to IIS.',
    ],
  },
  {
    title: 'TaskFlow — Real-Time Kanban Project Management App',
    organization: 'Personal Project',
    details: [
      'Built a full-stack Kanban app (Projects → Boards → Columns → Tasks) with an ASP.NET Core / EF Core API in a layered Controller-Service-Repository architecture and an Angular frontend using standalone components, signals, and Signal Forms.',
      'Implemented real-time multi-user sync with SignalR, so drag-and-drop task moves and board edits appear instantly for every teammate viewing the same board.',
      'Built secure authentication with ASP.NET Identity and JWT, including email-based OTP verification and password reset delivered via Gmail SMTP.',
      'Added team collaboration features — email invitations, role-based permissions, task comments, and color-coded labels — and deployed the API to Monster ASP.NET with a PostgreSQL (Neon) database and the frontend to Cloudflare Pages.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Computer and Information Technology',
    institution: 'The Egyptian E-Learning University (EELU)',
    period: '2020 – 2024',
    gpa: 'GPA: 3.04 / 4.00',
  },
]

export const certifications: CertificationEntry[] = [
  {
    name: 'Back-End Development Bootcamp — ASP.NET',
    issuer: 'Learnit Academy & Career 180',
    date: '2024 – 2025',
  },
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp & Microsoft Developer Division',
    date: 'June 2026',
  },
]