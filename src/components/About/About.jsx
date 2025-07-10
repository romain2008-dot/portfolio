import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="section-title gradient-text">
            À propos de moi
          </h2>

          <div className="about-grid">
            <div className="about-text">
              <motion.p
              >
                Passionné par le développement web et les nouvelles technologies, je suis un développeur Frontend créatif qui aime transformer des idées en expériences digitales exceptionnelles.
              </motion.p>
              <motion.p
              >
                Avec une formation en développement web et une expérience pratique sur divers projets, je maîtrise les technologies modernes et les bonnes pratiques du développement.
              </motion.p>
              <motion.p
              >
                Je suis constamment en train d'apprendre et d'explorer de nouvelles technologies pour créer des solutions innovantes et performantes.
              </motion.p>
            </div>
            <motion.div 
              className="about-stats"
            >
              <motion.div 
                className="stat-item" 
                whileHover="hover"
              >
                <h3>1+</h3>
                <p>Années d'expérience</p>
              </motion.div>
              <motion.div 
                className="stat-item" 
                whileHover="hover"
              >
                <h3>10+</h3>
                <p>Projets réalisés</p>
              </motion.div>
              <motion.div 
                className="stat-item" 
                whileHover="hover"
              >
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