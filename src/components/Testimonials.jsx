import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Kemisola Olorunda",
            role: "CEO,MD of LUXURY BY TEMMY STORES",
            content: "Working with Tuyife was an absolute pleasure. They delivered beyond my expectations every step of the way.",
            initials: "LBTS"
        },
        {
            name: "Iyawumi Abosede Racheal",
            role: "Marketing Director, Nearby Tasty Foods",
            content: "The website they created for us significantly improved our online presence and customer engagement.",
            initials: "NTF"
        },
        {
            name: "Akinrinola Blessing",
            role: "Owner, SAVAGE INK By MIDE",
            content: "The solution they provided was exactly what we needed. Their attention to detail and professionalism are unmatched,He is the best graphic designer",
            initials: "SIBM"
        },
        
    ];

    return (
        <section className="testimonials" id="testimonials">
            <h2>Client Testimonials</h2>
            <div className="section-line"></div>
            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="message">{testimonial.content}</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">{testimonial.initials}</div>
                            <div>
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}