import type { Profile } from '../types/profile'

export const profile: Profile = {
  fullName: 'Waleed Ahmed Korashy',
  preferredName: 'Waleed Korashy',
  professionalTitle: 'Full Stack .NET Developer Building Practical Business Applications',
  targetRole: 'Full Stack .NET Developer',
  specialization: '.NET Full Stack Development',
  location: 'Asyut, Egypt',
  relocation: 'Open to relocation',
  email: 'wqorashy@gmail.com',
  phone: {
    value: '+20110041002',
    isPublic: false,
  },
  valueProposition:
    "Computer and Information Technology graduate targeting a Full Stack .NET Developer role. Hands-on experience building full-stack applications with C#, ASP.NET Core, Entity Framework, SQL Server, Angular, and React — including REST APIs, JWT authentication, and deployment to IIS and cloud platforms. I've shipped an AI-integrated fashion e-commerce platform and a real-time Kanban app, both live with public source code, and I'm currently building MediPass+, a medical history platform with visit-scoped doctor access.",
  about: [
    "I'm Waleed Korashy, a Full Stack .NET Developer based in Asyut, Egypt. I build full-stack web applications using C#, ASP.NET Core, Entity Framework, SQL Server, Angular, and React, with hands-on experience in REST APIs, JWT authentication, and deployment to IIS and cloud platforms.",
    "I care about clean architecture, well-designed data models, and features that solve real business problems. I've shipped an AI-integrated fashion e-commerce platform and a real-time Kanban app — both live with public source code — and I'm currently building MediPass+, a medical history platform with visit-scoped doctor access. I also value clear communication and understanding requirements before moving into implementation.",
  ],
  cta: {
    heading: 'Your Idea Deserves More Than Just Code.',
    supportingText:
      "I build modern, interactive web applications with .NET that combine clean functionality with an engaging user experience. Tell me what you're trying to build, and let's turn it into a product people want to use.",
    startLabel: 'Start Your Project →',
    primaryLabel: 'View My Work',
    primaryHref: '#work',
    secondaryLabel: "Let's Connect",
    secondaryHref: '#contact',
    resumeLabel: 'CV',
  },
  audiences: ['Freelance clients', 'Recruiters', 'Hiring managers'],
  targetClients: [
    'E-commerce businesses',
    'Startups',
    'Software companies',
    'Suitable full-stack .NET development projects',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/waleed-korashy',
    github: 'https://github.com/waleedkorashy',
    cv: '/assets/Resume/Waleed_Ahmed_Korashy_Resume.pdf',
  },
  profileImage: {
    src: '/assets/profile/profile-photo-960.webp',
    srcSet:
      '/assets/profile/profile-photo-480.webp 480w, /assets/profile/profile-photo-720.webp 720w, /assets/profile/profile-photo-960.webp 960w',
    width: 960,
    height: 1200,
    alt: 'Professional portrait of Waleed Korashy in a dark suit',
    isAvailable: true,
  },
}
