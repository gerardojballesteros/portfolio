import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Frameworks } from './components/Frameworks/Frameworks';
import { Projects } from './components/Projects/Projects';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Frameworks />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}


