import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // For social media icons
import './../App.css'; // Assuming this contains general styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        {/* Mail Icon */}
        <a href="mailto:sriprasanna.2k2@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={40} className="contact-icon" />
        </a>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/sri-prasanna-d-622961216/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="contact-icon" />
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/bad_freakz" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
