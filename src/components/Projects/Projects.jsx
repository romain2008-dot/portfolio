import React from 'react';
import { motion } from 'framer-motion';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Kasa",
      description: "Site de location de logements",
      technologies: ["React", "React Router", "Sass"],
      image: "/kasa.png",
      github: "https://github.com/romain2008-dot/kasa-p6",
      live: "https://kasa-p6-drab.vercel.app/"
    },
    {
      title: "Sophie bluel",
      description: "Portfolio de sophie bluel",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/400x250/00cec9/ffffff?text=Dashboard",
      github: "https://github.com/romain2008-dot/sophie-bluel",
      live: "https://sophie-bluel-kohl.vercel.app/index.html"
    },
    {
      title: "ArgentBank",
      description: "Application bancaire",
      technologies: ["React", "React Router", "Redux" ],
      image: "./argentbank.png",
      github: "https://github.com/romain2008-dot/argentBank",
      live: "https://argentbank-nu.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            Mes Projets
          </h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Project key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 