import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCode } from "react-icons/fa";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "User Experience (UX)",
      description:
        "Creating intuitive and engaging user experiences through research, wireframing, and usability testing to ensure your product delights users.",
    },
    {
      icon: <FaMobileAlt />,
      title: "User Interface (UI)",
      description:
        "Designing beautiful, responsive interfaces with attention to detail, color theory, and typography that bring your brand to life.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Building fast, scalable, and secure web applications using modern technologies and best practices to turn your vision into reality.",
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
