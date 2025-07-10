import { motion } from 'framer-motion';
import './Button.css';

function Button({ content, onClick, className }) {
  return (
    <motion.button 
      className={`cta-button ${className}`}
      onClick={onClick}
      whileHover="hover"
      whileTap="tap"
    >
      {content}
    </motion.button>
  );
}

export default Button;
