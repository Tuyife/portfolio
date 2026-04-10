import React from "react";

export default function Service(){
    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Content Creation",
        "Logo Design",
        "Cybersecurity"
    ];  

    return(
        <section className="services-section">
            <h2>My Services</h2>
            

                <div className="service-grid">
                {services.map((item, index) => (
                    <div
                    key={index} className="service-card"
                    >
                    {item}
                    </div>
                
                ))}
                </div>
        
        </section>
    );
}