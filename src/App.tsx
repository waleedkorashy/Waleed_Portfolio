import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CVPreview } from './components/CVPreview'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { certifications, education, experience } from './data/resume'
import { services } from './data/services'
import { skillGroups } from './data/skills'

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false)

  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} onOpenCV={() => setIsCVOpen(true)} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Education education={education} certifications={certifications} />
        <Skills skillGroups={skillGroups} />
        <Services services={services} />
        <SelectedWork projects={projects} />
        <Contact profile={profile} onOpenCV={() => setIsCVOpen(true)} />
      </main>
      <Footer profile={profile} />
      {isCVOpen && (
        <CVPreview
          cvSrc={profile.links.cv}
          label={profile.cta.resumeLabel}
          onClose={() => setIsCVOpen(false)}
        />
      )}
    </>
  )
}

export default App
