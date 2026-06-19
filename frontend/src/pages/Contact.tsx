import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="page-container contact-page">
      <motion.section
        className="content-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-grid">
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p className="lead-text">Have questions about our estimation methodologies or need enterprise support?</p>

                <div className="contact-methods">
                    <div className="contact-item">
                        <div className="contact-icon"><Mail size={24} /></div>
                        <div>
                            <strong>Email Us</strong>
                            <p>hello@umlestimator.app</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><Phone size={24} /></div>
                        <div>
                            <strong>Call Us</strong>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><MapPin size={24} /></div>
                        <div>
                            <strong>Headquarters</strong>
                            <p>100 Innovation Drive<br/>San Francisco, CA 94105</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form-card glass-panel">
                <h3>Send a Message</h3>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Jane Doe" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Work Email</label>
                        <input type="email" id="email" placeholder="jane@company.com" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">How can we help?</label>
                        <textarea id="message" rows={4} placeholder="Your message..." className="form-input"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
      </motion.section>
    </div>
  );
};
