import React from 'react';
import { motion } from 'framer-motion';
import './ParticleBackground.css';

const ParticleBackground = () => {

  const isMobile = window.innerWidth <= 768;
  const particleCount = isMobile ? 20 : 50;

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1, 
    duration: Math.random() * 8 + 8, 
    delay: Math.random() * 15
  }));

  return (
    <div className="particle-background">
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate="animate"
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground; 