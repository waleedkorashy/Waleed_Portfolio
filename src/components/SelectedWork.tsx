import type { Project } from '../types/project'

interface SelectedWorkProps {
  projects: Project[]
}

function getMonogram(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-kicker">Portfolio</p>
        <h2 id="work-title">Selected Work</h2>
        <p className="section-intro">
          Projects I am currently developing. Case studies, screenshots, and live demos
          will appear here as features are completed and verified.
        </p>
      </div>
      <ul className="grid project-grid">
        {projects.map((project) => (
          <li key={project.name}>
            <article className="panel project-card">
              <div className="project-visual">
                {project.image?.isAvailable ? (
                  <img src={project.image.src} alt={project.image.alt} />
                ) : (
                  <div className="project-placeholder" aria-hidden="true">
                    <span className="placeholder-monogram" aria-hidden="true">
                      {getMonogram(project.name)}
                    </span>
                    <span className="placeholder-label" aria-hidden="true">
                      In development
                    </span>
                  </div>
                )}
              </div>
              <p className="project-status">
                <span className="status-dot" aria-hidden="true" />
                {project.status}
              </p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-purpose">
                <span className="project-purpose-label">Purpose</span>
                {project.purpose}
              </p>
              <ul className="tag-list" aria-label={`${project.name} technology direction`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}