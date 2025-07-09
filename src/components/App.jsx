import React from 'react';
import './App.css';
import Nav from './Nav/Nav.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
