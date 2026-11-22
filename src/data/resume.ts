import type { CertificationEntry, EducationEntry, ExperienceEntry } from '../types/resume'

export const experience: ExperienceEntry[] = [
  {
    title: 'MediPass+ — Medical History Platform with Visit-Scoped Access',
    organization: 'DEPI Graduation Project · Full Stack .NET Track',
    period: '2026',
    details: [
      'Led a 6-person team for the DEPI graduation project: created the GitHub repository, set up the Jira project and backlog, established the branch, pull-request, and CI workflow, and reviewed every pull request.',
      'Built the ASP.NET Core 10 / EF Core / SQL Server REST API for a medical history platform, using Clean Architecture and ASP.NET Identity + JWT for patient, doctor, clinic staff, and admin roles.',
      'Owned the visit-access module end to end: a doctor starts the visit and the patient approves access by QR code (6-digit fallback). The doctor can then read the record only for that visit — access is capped at two hours, ends on completion, and can be revoked by the patient at any time.',
      'Contributed to the booking, clinic/doctor search, staff scheduling, and medical-record modules, including encrypted diagnosis text and an append-only audit log for every medical read and write.',
      'Tested the visit-access and booking rules with xUnit and Testcontainers-backed HTTP integration tests, including the 401/403/409 cases, grant expiry, and concurrent double-booking. Documented the API with Swagger/OpenAPI.',
    ],
  },
  {
    title: 'OutfitMaker — AI-Powered Fashion E-Commerce Platform',
    organization: 'EELU Graduation Project · Rebuilt & Expanded',
    period: '2024',
    details: [
      'Built and deployed the back end: an ASP.NET Core (.NET 10) REST API with EF Core and SQL Server for a React + TypeScript (Vite, Tailwind CSS) storefront and a separate AI microservice — live, with React on Cloudflare, the API on Windows hosting, and the AI service hosted separately.',
      'Delivered the core commerce API: accounts, favorites, and cart/checkout with atomic per-size stock reservation, secured with JWT authentication and engineered to run within free-tier hosting limits (512 MB memory cap, cold-start handling).',
      'Connected the React frontend to the API and the AI microservice, wiring JWT-authenticated requests, cart/checkout, and the AI shopping flows.',
      'Integrated the two AI features into the storefront: "Find My Size" for size prediction from body measurements and "AI Style Finder" for visual similarity search.',
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
      'Built a full-stack Kanban app (Projects → Boards → Columns → Tasks) with an ASP.NET Core 10 / EF Core API in a layered Controller-Service-Repository architecture, and an Angular 22 frontend using standalone components, signals, and Signal Forms.',
      'Implemented real-time multi-user sync with SignalR, so drag-and-drop task moves and board edits appear instantly for every teammate viewing the same board — no polling or manual refresh needed.',
      'Built secure authentication with ASP.NET Identity and JWT, including email-based OTP verification and password reset (hashed, single-use, 5-minute-expiry codes) delivered via Gmail SMTP.',
      'Added team collaboration features — email invitations, role-based permissions (owner vs. member), task comments, and color-coded labels — and deployed the API to Monster ASP.NET with a PostgreSQL (Neon) database and the Angular SPA to Cloudflare Pages.',
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