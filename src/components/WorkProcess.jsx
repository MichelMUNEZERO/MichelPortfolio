import React from "react";
import "./WorkProcess.css";

function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "I start by understanding the project requirements, target users, and goals. This helps me plan the best solution before writing any code.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "I create a simple and user-friendly design, focusing on layout, usability, and accessibility to ensure a good user experience.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "I turn the design into a functional product using modern web technologies, writing clean, efficient, and maintainable code.",
    },
    {
      number: "04",
      title: "Test",
      description:
        "I test the application to fix bugs, improve performance, and ensure everything works correctly across different devices and browsers.",
    },
  ];

  return (
    <section className="work-process section">
      <div className="container">
        <div className="work-process-header">
          <div>
            <h2 className="section-title">Work Process</h2>
            <p className="section-description">
              I follow a clear and structured workflow to make sure every
              project is delivered with quality, efficiency, and attention to
              detail.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-icon">
                <span className="process-number">{step.number}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
