import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import ProjectIdea from "./components/ProjectIdea";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <WorkProcess />
      <Portfolio />
      <ProjectIdea />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
