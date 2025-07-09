import React, { useState, useEffect } from 'react';
import './Nav.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand gradient-text" onClick={goToTop}>
          <span>RG</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>À propos</button>
          <button onClick={() => scrollToSection('skills')}>Compétences</button>
          <button onClick={() => scrollToSection('projects')}>Projets</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <div 
          className={`nav-toggle ${isMenuOpen ? 'nav-toggle-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 