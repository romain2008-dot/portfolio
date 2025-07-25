import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Kasa",
      description: "Site de location de logements",
      detailedDescription: "Développement d'une application web de location d'appartements entre particuliers. Création d'une interface utilisateur moderne avec React et Sass, implémentation d'un système de navigation avec React Router pour afficher les détails des appartements et gérer les erreurs de navigation.",
      technologies: ["React", "React Router", "Sass"],
      image: "/kasa.webp",
      github: "https://github.com/romain2008-dot/kasa-p6",
      live: "https://kasa-p6-drab.vercel.app/"
    },
    {
      title: "Sophie Bluel",
      description: "Portfolio de photographe",
      detailedDescription: "Création d'un site web pour Sophie Bluel, photographe d'art. Développement d'une galerie dynamique avec filtrage par catégories et mise en place d'un système de navigation fluide pour présenter les œuvres photographiques.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/sophie-bluel.webp",
      github: "https://github.com/romain2008-dot/sophie-bluel",
      live: "https://sophie-bluel-kohl.vercel.app/index.html"
    },
    {
      title: "ArgentBank",
      description: "Application bancaire",
      detailedDescription: "Développement d'une application bancaire avec système de connexion et gestion de profil utilisateur. Création de l'interface utilisateur, implémentation de l'authentification et possibilité de modifier le nom d'utilisateur. Préparation de la documentation Swagger pour l'API future de gestion des transactions.",
      technologies: ["React", "React Router", "Redux"],
      image: "/argentbank.webp",
      github: "https://github.com/romain2008-dot/argentBank",
      live: "https://argentbank-nu.vercel.app/"
    }
  ];

  useEffect(() => {
    projects.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

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