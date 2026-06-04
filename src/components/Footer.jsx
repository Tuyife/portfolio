import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                    <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">
                    <FaTwitter size={18} />
                </a>
                <a href="https://wa.me/+2348065878877" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                    <FaWhatsapp size={18} />
                </a>
            </div>

            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <p className="footer-copy">&copy; 2025 Tuyife. All rights reserved.</p>
        </footer>
    );
}

export default Footer;