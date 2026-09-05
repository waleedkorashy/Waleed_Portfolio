export type ProjectStatus = 'In Development' | 'Planned' | 'Completed'

export interface Project {
  name: string
  status: ProjectStatus
  description: string
  purpose: string
  technologies: string[]
  image?: {
    src: string
    alt: string
    isAvailable: boolean
  }
  links?: {
    live?: string
    repository?: string
    caseStudy?: string
  }
}
