export interface ExperienceEntry {
  title: string
  organization: string
  period?: string
  details: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
  gpa?: string
}

export interface CertificationEntry {
  name: string
  issuer: string
  date: string
}