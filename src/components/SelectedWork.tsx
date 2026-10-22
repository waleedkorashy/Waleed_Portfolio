import { useState } from 'react'
import type { Project } from '../types/project'
import { ScreenshotLightbox } from './ScreenshotLightbox'

interface SelectedWorkProps {
  projects: Project[]
}

type ActiveImage = NonNullable<Project['image']>

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
                    onClick={() => setActive(image)}
                    aria-label={`View larger ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(min-width: 1120px) 360px, (min-width: 720px) 33vw, calc(100vw - 48px)"
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                    />
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
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
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
                          aria-label={`${project.name} GitHub repository`}
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
                          aria-label={`${project.name} live demo`}
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
                          aria-label={`${project.name} case study`}
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
      {active && <ScreenshotLightbox image={active} onClose={() => setActive(null)} />}
    </section>
  )
}
