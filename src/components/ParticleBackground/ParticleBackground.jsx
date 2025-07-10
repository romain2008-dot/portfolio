import React from 'react';
import { motion } from 'framer-motion';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 20
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
            animate={{
              y: [-100, -200],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
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