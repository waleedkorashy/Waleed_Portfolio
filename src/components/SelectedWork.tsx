import type { Project } from '../types/project'

interface SelectedWorkProps {
  projects: Project[]
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title">Selected Work</h2>
      <div className="grid">
        {projects.map((project) => (
          <article className="panel" key={project.name}>
            <div className="project-visual">
              {project.image?.isAvailable ? (
                <img src={project.image.src} alt={project.image.alt} />
              ) : (
                <span>Project visual coming soon</span>
              )}
            </div>
            <p className="status">{project.status}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.purpose}</p>
            <ul className="tag-list" aria-label={`${project.name} technology direction`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
