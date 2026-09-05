import type { SkillGroup } from '../types/skill'

interface SkillsProps {
  skillGroups: SkillGroup[]
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <div className="grid">
        {skillGroups.map((group) => (
          <article className="panel" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
