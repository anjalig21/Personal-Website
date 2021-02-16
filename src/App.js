import React from "react";
import './CSS/App.css';
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Particle from "./components/particles";
import Skills from "./components/skills";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Grid } from "@material-ui/core";


function App() {
  return (
    <Grid container>
    
      <Navbar />
      <Particle />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Grid>
  );
}

export default App;
