export type ProjectStatus = 'In Development' | 'Planned' | 'Completed'

export interface Project {
  name: string
  status: ProjectStatus
  description: string
  purpose: string
  technologies: string[]
  image?: {
    src: string
    srcSet?: string
    width?: number
    height?: number
    alt: string
    isAvailable: boolean
  }
  links?: {
    live?: string
    repository?: string
    caseStudy?: string
  }
}
