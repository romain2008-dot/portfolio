import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Toast from '../Toast/Toast';
import Form from '../Form/Form';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'info' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    if (formData.get('bot-field')) return false; 

    const name = formData.get('user_name')?.trim() || '';
    const email = formData.get('user_email')?.trim() || '';
    const subject = formData.get('subject')?.trim() || '';
    const message = formData.get('message')?.trim() || '';

    if (!name || name.length < 2) return false;
    if (!validateEmail(email)) return false;
    if (!subject || subject.length < 3) return false;
    if (!message || message.length < 10) return false;

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({ message: 'Veuillez remplir correctement tous les champs.', type: 'error' });
      return;
    }

    setStatus('loading');

    emailjs.sendForm(
      'service_smvz5wl',
      'template_how90rm',
      form.current,
      'YBGrJwRc-wsaNv4Xe'
    ).then(() => {
      setStatus('success');
      setToast({ message: 'Message envoyé avec succès !', type: 'success' });
      form.current.reset();
    }).catch(() => {
      setStatus('error');
      setToast({ message: 'Erreur lors de l\'envoi, réessayez.', type: 'error' });
    });
  };

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="section-title gradient-text">Contactez-moi</h2>

            <div className="contact-content">
              <motion.div
                className="contact-info"
              >
                <h3>Travaillons ensemble !</h3>
                <p>
                  Vous avez un projet en tête ? N'hésitez pas à me contacter
                  pour discuter de vos idées et voir comment je peux vous aider
                  à les concrétiser.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>gutierrez08rom@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <h4>Localisation</h4>
                      <p>France</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <a 
                    href="http://linkedin.com/in/romain-gutierrez-4214b6305/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title="LinkedIn"
                  >
                    <img src="/linkedin_logo.svg" alt="linkedin logo" />
                  </a>
                  <a 
                    href="https://github.com/romain2008-dot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title="GitHub"
                  >
                    <img src='/github_logo.svg' alt="github logo" />
                  </a>
                </div>
              </motion.div>

              <motion.div >
                <Form form={form} sendEmail={sendEmail} status={status} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'info' })}
        />
      )}
    </>
  );
};

export default Contact;
