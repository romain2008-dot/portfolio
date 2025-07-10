import { motion } from 'framer-motion';
import './SkillsBadge.css';

const logos = import.meta.glob('../../assets/*_logo.svg', { eager: true, import: 'default' });

function getLogo(skillName) {
  const fileName = `../../assets/${skillName.toLowerCase()}_logo.svg`;
  return logos[fileName];
}

function SkillsBadge ({skill, index, hovered, setHovered, hexToRgb}) {

  return (
    <motion.span
      key={skill.name}
      className="skill-badge"
      style={{ 
        backgroundColor: skill.color,
        boxShadow: hovered === index ? `0 4px 15px rgba(${hexToRgb(skill.color)})` : 'none',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {skill.name}
      {hovered === index && (
        <motion.img
          className="skill-hover-square"
          src={getLogo(skill.name)}
          alt={`${skill.name} Logo`}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      )}
    </motion.span>
  );
}

export default SkillsBadge