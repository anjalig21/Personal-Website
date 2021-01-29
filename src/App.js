import React from "react";
import './CSS/App.css';
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Particle from "./components/particles"
import Skillsgrid from "./components/skills-grid"


function App() {
  return (
    <div>
      <Navbar />
      <Particle />
      <Banner />
      <Skillsgrid/>
    </div>
  );
}

export default App;
