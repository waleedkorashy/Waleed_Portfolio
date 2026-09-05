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
      { name: 'LINQ' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'Bootstrap' },
      { name: 'Angular' },
      { name: 'React' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL Server' },
      { name: 'T-SQL' },
      { name: 'Database Design' },
      { name: 'Entity Relationship Diagrams' },
      { name: 'Normalization' },
    ],
  },
  {
    category: 'Tools & Development',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'IIS' },
      { name: 'Visual Studio' },
      { name: 'VS Code' },
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
      { name: 'API Integration' },
    ],
  },
]
