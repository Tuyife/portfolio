import React from 'react';

export default function Testimonials(){
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Tech Corp",
            content: "Working with this developer was an absolute pleasure. They delivered beyond my expectations."
        },
        {
            name: "Jane Smith",
            role: "Marketing Director, Brand Inc",
            content: "The website they created for us has significantly improved our online presence and customer engagement."
        }
    ];

    return(
        <section className="testimonials-section">
            <h2>Client Testimonials</h2>
            <div className="testimonials-grid">
                {testimonials.map(( index) => (
                    <div key={index} className="testimonial-card">
                        <p>"{testimonial.content}"</p>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}