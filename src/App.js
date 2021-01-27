import React from "react";
import './CSS/App.css';
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Particle from "./components/particles"


function App() {
  return (
    <div>
      <Particle />
      <Banner />
      <Skills />
      <Navbar />
    </div>
  );
}

export default App;
