import type { Profile } from '../types/profile'

export const profile: Profile = {
  fullName: 'Waleed Ahmed Korashy',
  preferredName: 'Waleed Korashy',
  professionalTitle: 'Junior Full-Stack .NET Developer Building Practical Business Web Applications',
  targetRole: 'Junior Full-Stack .NET Developer',
  specialization: '.NET Full Stack Development',
  location: 'Asyut, Egypt',
  relocation: 'Open to relocation',
  email: 'wqorashy@gmail.com',
  phone: {
    value: '+20110041002',
    isPublic: false,
  },
  valueProposition:
    'I build structured web applications with clear requirements, organized backend logic, and user-focused frontend interfaces. My approach is to understand the business need first, communicate clearly during development, and deliver practical .NET-based solutions that are maintainable, reliable, and ready to grow as the project evolves.',
  about: [
    'I’m Waleed Korashy, a Junior Full-Stack .NET Developer based in Asyut, Egypt. I focus on building practical web applications using C#, ASP.NET Core, Entity Framework Core, SQL Server, and modern frontend tools such as Angular and React. My current portfolio projects are designed around real business use cases, including project management, e-commerce, and appointment booking systems.',
    'I care about writing organized code, designing clear database structures, and building features that are useful for both users and business owners. I also value clear communication, careful follow-up, and understanding project requirements before moving into implementation. This portfolio presents the systems I am currently developing to demonstrate my full-stack .NET development skills.',
  ],
  cta: {
    heading: "Let's Build Something Useful",
    supportingText:
      "I'm open to freelance projects and junior full-stack .NET opportunities where clear communication, practical development, and maintainable implementation matter.",
    primaryLabel: 'View My Work',
    primaryHref: '#work',
    secondaryLabel: "Let's Connect",
    secondaryHref: '#contact',
  },
  audiences: ['Freelance clients', 'Recruiters', 'Hiring managers'],
  targetClients: [
    'E-commerce businesses',
    'Startups',
    'Software companies',
    'Suitable junior full-stack .NET development projects',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/waleed-korashy',
    github: 'https://github.com/waleedkorashy',
    cv: 'https://drive.google.com/file/d/1LRCVPvC6g5rlSP4s_MTUL7MzG0BooByv/view?usp=sharing',
  },
  profileImage: {
    src: '/assets/profile/profile-photo.jpg',
    alt: 'Professional profile photo of Waleed Korashy',
    isAvailable: true,
  },
}
