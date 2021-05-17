//React/Material UI Libraries
import React, {useEffect} from 'react'
import ReactGa from 'react-ga'

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

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_TRACKING_ID);
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])

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