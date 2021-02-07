import React from "react";
import './CSS/App.css';
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Particle from "./components/particles"
import Skills from "./components/skills"
import Projects from "./components/projects"


function App() {
  return (
    <div>
      <Navbar />
      <Particle />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
