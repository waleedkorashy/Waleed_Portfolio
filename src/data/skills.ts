import type { SkillGroup } from '../types/skill'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'T-SQL' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    items: [
      { name: 'ASP.NET Core' },
      { name: 'ASP.NET MVC' },
      { name: 'ASP.NET WebForms' },
      { name: 'ASP.NET Web API' },
      { name: 'Entity Framework' },
      { name: 'LINQ' },
      { name: 'SignalR' },
      { name: 'ASP.NET Identity' },
    ],
  },
  {
    category: 'Frontend & Frameworks',
    items: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'jQuery' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'Relational Database Design' },
    ],
  },
  {
    category: 'APIs & Auth',
    items: [
      { name: 'REST APIs' },
      { name: 'JSON' },
      { name: 'JWT Authentication' },
      { name: 'Swagger/OpenAPI' },
      { name: 'Postman' },
    ],
  },
  {
    category: 'Testing',
    items: [{ name: 'xUnit' }, { name: 'Testcontainers' }],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'Docker' },
      { name: 'Cloudflare Pages' },
      { name: 'IIS' },
      { name: 'Windows Hosting' },
      { name: 'Git & GitHub' },
      { name: 'GitHub Actions' },
    ],
  },
  {
    category: 'Networking & Security',
    items: [
      { name: 'TCP/IP' },
      { name: 'DNS' },
      { name: 'Network Protocols' },
      { name: 'Information Security & Privacy Fundamentals' },
    ],
  },
  {
    category: 'Operating Systems',
    items: [{ name: 'Windows' }, { name: 'Linux' }],
  },
  {
    category: 'Other',
    items: [{ name: 'OOP Principles' }, { name: 'SOLID Principles' }],
  },
  {
    category: 'Project Management',
    items: [
      { name: 'Agile' },
      { name: 'Kanban' },
      { name: 'Jira' },
      { name: 'Backlog Management' },
      { name: 'Team Leadership' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Communication' },
      { name: 'Teamwork & Collaboration' },
      { name: 'Problem-Solving' },
      { name: 'Time Management' },
      { name: 'Ownership' },
      { name: 'Attention to Detail' },
    ],
  },
  {
    category: 'Spoken Languages',
    items: [{ name: 'Arabic (Native)' }, { name: 'English (Fluent)' }],
  },
]