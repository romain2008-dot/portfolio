import {motion} from 'framer-motion';
import { useState } from 'react';
import './Project.css';

function Project ( { project, index } ) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
        key={project.title}
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="project-content">
          <h3>{project.title}</h3>
          
          <div className="project-description">
            <p className={isExpanded ? "expanded" : "collapsed"}>
              {project.detailedDescription || project.description}
            </p>
            <button 
              className="expand-btn" 
              onClick={toggleExpanded}
            >
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
          </div>
          
          <div className="project-tech">
            <div className="tech-tags">
              {(project.technologies).slice(0, isExpanded ? undefined : 3).map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
              {!isExpanded && (project.technologies).length > 3 && (
                <span className="tech-tag more-tag">+{(project.technologies).length - 3}</span>
              )}
            </div>
          </div>
          
          <div className="project-links">
            <div className="link-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github-btn">
                <img src="./github_logo.svg" alt="github logo" className=' link-icon' />
                Code source
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn live-btn">
                Voir en ligne
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
}

export default Project