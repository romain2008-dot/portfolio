import {motion } from 'framer-motion';
import './Form.css';

function Form({ form, sendEmail, status }) {
    return (
        <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <input type="text" name="bot-field" style={{ display: 'none' }} />

        <div className="form-group">
          <input type="text" name="user_name" placeholder="Votre nom" required />
        </div>

        <div className="form-group">
          <input type="email" name="user_email" placeholder="Votre email" required />
        </div>

        <div className="form-group">
          <input type="text" name="subject" placeholder="Sujet" required />
        </div>

        <div className="form-group">
          <textarea name="message" placeholder="Votre message" rows="5" required></textarea>
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
        </motion.button>
      </motion.form>
    )
}

export default Form