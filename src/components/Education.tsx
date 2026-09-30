import type { CertificationEntry, EducationEntry } from '../types/resume'

interface EducationProps {
  education: EducationEntry[]
  certifications: CertificationEntry[]
}

export function Education({ education, certifications }: EducationProps) {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="section-split">
        <div>
          <p className="section-kicker">Background</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="section-copy">
          {education.map((item) => (
            <article className="panel timeline-card" key={item.degree}>
              <h3>{item.degree}</h3>
              <p className="timeline-meta">
                {item.institution} · {item.period}
              </p>
              {item.gpa && <p className="muted">{item.gpa}</p>}
            </article>
          ))}
          <div className="certifications">
            <h3>Certifications</h3>
            <ul className="timeline-details">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong> — {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}