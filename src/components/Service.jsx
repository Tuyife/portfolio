import React from "react";
import "./Service.css";
import { FaGlobe, FaMobileAlt, FaPaintBrush, FaPen, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const services = [
    {
        icon: <FaGlobe size={22} />,
        title: "Web Development",
        desc: "Fast, responsive websites built with React & modern tech"
    },
    {
        icon: <FaMobileAlt size={22} />,
        title: "Mobile Apps",
        desc: "Cross-platform mobile apps with smooth UX"
    },
    {
        icon: <FaPaintBrush size={22} />,
        title: "UI/UX Design",
        desc: "Clean, intuitive interfaces users love to interact with"
    },
    {
        icon: <FaPen size={22} />,
        title: "Content Creation",
        desc: "Engaging content tailored to your brand voice"
    },
    {
        icon: <MdOutlineDesignServices size={22} />,
        title: "Logo Design",
        desc: "Memorable logos that represent your brand identity"
    },
    {
        icon: <FaShieldAlt size={22} />,
        title: "Cybersecurity",
        desc: "Protect your digital assets from modern threats"
    },
];

export default function Service() {
    return (
        <section className="services" id="services">
            <h2>My Services</h2>
            <div className="section-line"></div>
            <p className="services-subtitle">Here's what I can build for you</p>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}