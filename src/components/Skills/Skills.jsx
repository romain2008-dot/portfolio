import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', color: '#f16728' },
    { name: 'CSS', color: '#3c9dd6' },
    { name: 'Sass', color: '#ce659b' },
    { name: 'JavaScript', color: '#f0db4f' },
    { name: 'React', color: '#61DBFB' },
    { name: 'Redux', color: '#764bba' },
    { name: 'Git', color: '#de4d37' }
  ];

  const [hovered, setHovered] = useState(null);
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            Mes Compétences
          </h2>
          <div className="skills-badges-container">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className="skill-badge"
                style={{ backgroundColor: skill.color,
                  boxShadow: hovered === index ? `0 4px 15px rgba(${hexToRgb(skill.color)})` : 'none',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {skill.name}
                {hovered === index && (
                  <motion.img
                  className="skill-hover-square"
                  src={`/public/${skill.name}_logo.svg`}
                  alt={`${skill.name} Logo`}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 35, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                />
                )}
              </motion.span>
            ))}
          </div>
        <div className='formation'>
          <h2 className="section-title gradient-text">
            Formations suivies
          </h2>
           <div className="skills-formation">
            <span className="formation-icon">
              <img src="/openclassrooms_logo.svg" alt="OpenClassrooms" />
            </span>
            Formation suivie :
            <a
              href="https://openclassrooms.com/fr/paths/900-integrateur-web"
              target="_blank"
              rel="noopener noreferrer"
              >
              &nbsp;Parcours Intégrateur Web – OpenClassrooms
            </a>
          </div> 
          </div>
              </motion.div>
      </div>
    </section>
  );
};

export default Skills; 