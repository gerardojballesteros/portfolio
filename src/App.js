import React from 'react';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Frameworks from './components/Frameworks/Frameworks';

const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Frameworks />
    </main>
  )
}

export default App

