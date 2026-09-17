export interface Profile {
  fullName: string
  preferredName: string
  professionalTitle: string
  targetRole: string
  specialization: string
  location: string
  relocation: string
  email: string
  phone: {
    value: string
    isPublic: boolean
  }
  valueProposition: string
  about: string[]
  cta: {
    heading: string
    supportingText: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
  audiences: string[]
  targetClients: string[]
  links: {
    linkedin: string
    github: string
    cv: string
  }
  profileImage: {
    src: string
    alt: string
    isAvailable: boolean
  }
}
