import React from "react";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
return (
  <div className="app">
    <Navigation />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Qualification />
    <Contact />

  </div>
);
}

export default App;
