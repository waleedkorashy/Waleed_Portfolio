import type { SkillGroup } from '../types/skill'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: [
      { name: 'C#' },
      { name: '.NET' },
      { name: '.NET Core' },
      { name: 'ASP.NET Core' },
      { name: 'ASP.NET Core Web API' },
      { name: 'ASP.NET MVC' },
      { name: 'ASP.NET Web Forms' },
      { name: 'Entity Framework Core' },
      { name: 'ASP.NET Core Identity' },
      { name: 'LINQ' },
      { name: 'REST APIs' },
      { name: 'SignalR' },
      { name: 'MailKit' },
      { name: 'Hangfire' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'jQuery' },
      { name: 'Bootstrap' },
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Angular CDK' },
      { name: 'Angular Material' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'T-SQL' },
      { name: 'Database Design' },
      { name: 'Entity Relationship Diagrams' },
      { name: 'Normalization' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'TensorFlow/Keras' },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'IIS' },
      { name: 'Visual Studio' },
      { name: 'VS Code' },
      { name: 'Cloudflare Pages' },
      { name: 'Docker' },
    ],
  },
  {
    category: 'Core Concepts',
    items: [
      { name: 'Object-Oriented Programming' },
      { name: 'SOLID' },
      { name: 'Authentication' },
      { name: 'Authorization' },
      { name: 'JWT' },
      { name: 'Email OTP Verification' },
      { name: 'API Integration' },
    ],
  },
]