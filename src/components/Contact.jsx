import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="section-line"></div>

            <div className="contact-wrapper">
                <div className="contact-info">
                    <h3>Let's work together</h3>
                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <span>tuyifeisrael@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">💬</span>
                        <span>+234 9029565779</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>Nigeria</span>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">
                        {submitted ? '✅ Message Sent!' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;