import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { services } from './data/services'
import { skillGroups } from './data/skills'

function App() {
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Services services={services} />
        <Skills skillGroups={skillGroups} />
        <SelectedWork projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
