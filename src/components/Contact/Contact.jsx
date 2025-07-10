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
      setToast({ message: 'Erreur lors de l’envoi, réessayez.', type: 'error' });
    });
  };

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title gradient-text">Contactez-moi</h2>

            <div className="contact-content">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
              </motion.div>

              <Form form={form} sendEmail={sendEmail} status={status} />
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
