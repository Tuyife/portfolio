import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <div className="section-line"></div>
            <p className="about-bio">
                I'm a self-taught web developer skilled in JavaScript, React, HTML and CSS.
                I enjoy building web applications that are clean, functional, and user-friendly.
            </p>

            <div className="about-grid">
                <div className="stack-card">
                    <h4>Frontend</h4>
                    <p>React, JavaScript, HTML, CSS</p>
                </div>
                <div className="stack-card">
                    <h4>Backend</h4>
                    <p>Node.js, Express</p>
                </div>
                <div className="stack-card">
                    <h4>Tools</h4>
                    <p>Git, VS Code, APIs, Authentication</p>
                </div>
                <div className="stack-card">
                    <h4>Learning</h4>
                    <p>TypeScript, Next.js</p>
                </div>
            </div>
        </section>
    );
}

export default About;