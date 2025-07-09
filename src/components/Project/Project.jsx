import {motion} from 'framer-motion';
import './Project.css';

function Project ( { project, index } ) {
    return (
        <motion.div
        key={project.title}
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <motion.button
              className="project-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Voir le projet
            </motion.button>
          </div>
        </div>
        
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code source
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Voir en ligne
            </a>
          </div>
        </div>
      </motion.div>
    )
}

export default Project