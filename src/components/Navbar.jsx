import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Tuyife</div>

            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setIsActive(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsActive(false)}>About</a></li>
                <li><a href="#services" onClick={() => setIsActive(false)}>Services</a></li>
                <li><a href="#projects" onClick={() => setIsActive(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setIsActive(false)}>Contact</a></li>
            </ul>

            <div className="nav-right">
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <div className="hamburger" onClick={() => setIsActive(!isActive)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}