import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">My Logo</div>

            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><a href="#Home" onClick={() => setIsActive(false)}>Home</a></li>
                <li><a href="#About" onClick={() => setIsActive(false)}>About</a></li>
                <li><a href="#Services" onClick={() => setIsActive(false)}>Services</a></li>
                <li><a href="#Contact" onClick={() => setIsActive(false)}>Contact</a></li>
                <li><a href="#Projects" onClick={() => setIsActive(false)}>Projects</a></li>
            </ul>

            <div className="hamburger" onClick={() => setIsActive(!isActive)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>

    );
}