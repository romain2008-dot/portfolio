import { motion } from 'framer-motion';
import './SkillsBadge.css';

const logos = import.meta.glob('../../assets/*_logo.svg', { eager: true, import: 'default' });

Object.values(logos).forEach((src) => {
  const img = new Image();
  img.src = src;
});

function getLogo(skillName) {
  const fileName = `../../assets/${skillName.toLowerCase()}_logo.svg`;
  return logos[fileName];
}

function SkillsBadge({ skill, index, hovered, setHovered, hexToRgb }) {
  return (
    <motion.span
      key={skill.name}
      className="skill-badge"
      style={{
        backgroundColor: skill.color,
        boxShadow:
          hovered === index
            ? `0 4px 15px rgba(${hexToRgb(skill.color)})`
            : 'none',
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
          src={getLogo(skill.name)}
          alt={`${skill.name} Logo`}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 35, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        />
      )}
    </motion.span>
  );
}

export default SkillsBadge;
