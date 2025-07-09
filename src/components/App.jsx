import React from 'react';
import './App.css';
import Nav from './Nav/Nav.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
