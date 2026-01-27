import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCode } from "react-icons/fa";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "User Experience (UX)",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaMobileAlt />,
      title: "User Interface (UI)",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">What I do?</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <button className="btn-primary">More Services</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
