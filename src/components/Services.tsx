import type { Service } from '../types/service'

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <h2 id="services-title">Services</h2>
      <div className="grid">
        {services.map((service) => (
          <article className="panel" key={service.title}>
            <span className="service-mark" aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
