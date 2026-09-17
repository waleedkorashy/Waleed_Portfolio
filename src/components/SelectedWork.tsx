import { useEffect, useState } from 'react'
import type { Project } from '../types/project'

interface SelectedWorkProps {
  projects: Project[]
}

interface ActiveImage {
  src: string
  alt: string
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
  const [active, setActive] = useState<ActiveImage | null>(null)

  useEffect(() => {
    if (!active) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-kicker">Portfolio</p>
        <h2 id="work-title">Selected Work</h2>
        <p className="section-intro">
          A selection of my current projects. Hover to zoom, and click any screenshot to
          view it full-size.
        </p>
      </div>
      <ul className="grid project-grid">
        {projects.map((project) => {
          const image = project.image
          return (
            <li key={project.name}>
              <article className="panel project-card">
                {image?.isAvailable ? (
                  <button
                    type="button"
                    className="project-visual project-visual-button"
                    onClick={() => setActive({ src: image.src, alt: image.alt })}
                    aria-label={`View larger ${image.alt}`}
                  >
                    <img src={image.src} alt={image.alt} />
                    <span className="visual-hint" aria-hidden="true">
                      Click to enlarge
                    </span>
                  </button>
                ) : (
                  <div className="project-visual">
                    <div className="project-placeholder" aria-hidden="true">
                      <span className="placeholder-monogram" aria-hidden="true">
                        {getMonogram(project.name)}
                      </span>
                      <span className="placeholder-label" aria-hidden="true">
                        In development
                      </span>
                    </div>
                  </div>
                )}
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
                {project.links && (
                  <ul className="project-links" aria-label={`${project.name} links`}>
                    {project.links.repository && (
                      <li>
                        <a
                          className="project-link"
                          href={project.links.repository}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          GitHub Repository
                        </a>
                      </li>
                    )}
                    {project.links.live && (
                      <li>
                        <a
                          className="project-link"
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Live Demo
                        </a>
                      </li>
                    )}
                    {project.links.caseStudy && (
                      <li>
                        <a
                          className="project-link"
                          href={project.links.caseStudy}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Case Study
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </article>
            </li>
          )
        })}
      </ul>
      {active && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot preview"
          onClick={() => setActive(null)}
        >
          <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
          </figure>
        </div>
      )}
    </section>
  )
}