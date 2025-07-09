import { motion } from 'framer-motion';
import './Button.css';

function Button({ content, onClick, className }) {
    return (
        <motion.button 
            className={`cta-button ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {content}
        </motion.button>
    );
}

export default Button;
