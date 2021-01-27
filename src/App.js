import React from "react";
import './App.css';
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Particle from "./components/background"


function App() {
  return (
    <div>
      <Particle />
      <Banner />
      <Navbar />
      <Skills />
    </div>
  );
}

export default App;
