import React from 'react';
import './App.css';
import Nav from './Nav/Nav.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
