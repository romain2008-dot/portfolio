import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  const [titleText, setTitleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Salut, je suis Romain Gutierrez";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTitleText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 75);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      setShowCursor(false);
    }
  }, [currentIndex, fullText]);

  const openCV = () => {   
    window.open('/cv-romain-gutierrez.pdf', '_blank');
  };

  const openGithub = () => {   
    window.open('https://github.com/romain2008-dot', '_blank');
  };

  return (
    <div className="hero section">
      <div className="hero-background">
        <motion.div 
          className="gradient-orb"
          animate="animate"
        />
        <motion.div 
          className="gradient-orb-2"
          animate="animate"
        />
      </div>

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial="hidden"
          animate="visible"
        >
          <div className="title-container">
            <span className="title-text">{titleText}</span>
            <AnimatePresence>
              {showCursor && (
                <motion.span
                  key="cursor"
                  className="typewriter-cursor"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    animation: isTypingComplete ? 'none' : 'blink 0.7s infinite'
                  }}
                >
                  |
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
        >
          Développeur Frontend passionné
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial="hidden"
          animate="visible"
        >
          <Button content="Mon Github" onClick={openGithub} className="primary" />
          <Button content="Voir mon CV" onClick={openCV} className="secondary" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 