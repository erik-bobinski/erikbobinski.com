import React from 'react';
import './Contact.css';
import { Mail, LinkedIn, GitHubLogo } from '../../assets';

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <h2 className="contact-title">Connect with me</h2>
            <div className="contact-items">
                <div className="contact-item">
                    <img src={Mail} alt="Email" className="contact-icon" />
                    <a href="mailto:ebobinski0@gmail.com" className="contact-link">ebobinski0@gmail.com</a>
                </div>
                <div className="contact-item">
                    <img src={LinkedIn} alt="LinkedIn" className="contact-icon" />
                    <a href="https://www.linkedin.com/in/erik-bobinski" target="_blank" rel="noopener noreferrer" className="contact-link">Erik Bobinski</a>
                </div>
                <div className="contact-item">
                    <img src={GitHubLogo} alt="GitHub" className="contact-icon" />
                    <a href="https://github.com/erik-bobinski" target="_blank" rel="noopener noreferrer" className="contact-link">erik-bobinski</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
