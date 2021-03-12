//React/Material UI Libraries
import React from 'react'

//File Imports
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Particle from './Components/Particles/Particles'
import Footer from './Components/Footer/Footer'
import './App.css'

//App contains layout of the node website
export default function App() {
  return (
    <div>
      <Navbar />
      <Particle />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}