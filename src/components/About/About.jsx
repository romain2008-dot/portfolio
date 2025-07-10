import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
      <motion.div 
  className="about-content"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="section-title gradient-text">
    À propos de moi
  </h2>

  <div className="about-grid">
    <div className="about-text">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Passionné par le développement web et les nouvelles technologies, je suis un développeur Frontend créatif qui aime transformer des idées en expériences digitales exceptionnelles.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
          Avec une formation en développement web et une expérience pratique sur divers projets, je maîtrise les technologies modernes et les bonnes pratiques du développement.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
       Je suis constamment en train d'apprendre et d'explorer de nouvelles technologies pour créer des solutions innovantes et performantes.
      </motion.p>
    </div>
    <motion.div 
      className="about-stats"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div className="stat-item" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <h3>1+</h3>
        <p>Années d'expérience</p>
      </motion.div>
      <motion.div className="stat-item" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <h3>10+</h3>
        <p>Projets réalisés</p>
      </motion.div>
      <motion.div className="stat-item" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <h3>5+</h3>
        <p>Technologies maîtrisées</p>
      </motion.div>
    </motion.div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default About; 