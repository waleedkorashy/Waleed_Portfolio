export interface Skill {
  name: string
}

export interface SkillGroup {
  category: string
  items: Skill[]
}
