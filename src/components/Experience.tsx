import type { ExperienceEntry } from '../types/resume'

interface ExperienceProps {
  experience: ExperienceEntry[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-split">
        <div data-reveal>
          <p className="section-kicker">Background</p>
          <h2 id="experience-title">Experience</h2>
        </div>
        <div className="section-copy">
          <ol className="timeline">
            {experience.map((entry) => (
              <li className="timeline-item" key={entry.title} data-reveal>
                <h3>{entry.title}</h3>
                <p className="timeline-meta">
                  {entry.organization}
                  {entry.period ? ` · ${entry.period}` : ''}
                </p>
                <ul className="timeline-details">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}