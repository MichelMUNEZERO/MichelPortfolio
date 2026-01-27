import React from "react";
import {
  FaJava,
  FaDatabase,
  FaUsers,
  FaLock,
  FaCalendar,
  FaChalkboardTeacher,
  FaReact,
  FaNodeJs,
  FaQrcode,
  FaCreditCard,
  FaUtensils,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiMysql } from "react-icons/si";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "School Management System",
      subtitle: "Java Web Application",
      image: "/images/school-management-software.jpg",
      description:
        "A complete web-based School Management System designed to manage students, teachers, parents, and administrators efficiently. The system includes role-based dashboards, secure authentication, and full CRUD operations for academic and administrative data.",
      tech: [
        { icon: <FaJava />, name: "Java" },
        { icon: null, name: "JSP" },
        { icon: null, name: "Servlet" },
        { icon: <FaDatabase />, name: "MySQL" },
      ],
      features: [
        {
          icon: <FaUsers />,
          text: "Student, Teacher, Parent, and Admin management",
        },
        { icon: <FaLock />, text: "Role-based access control" },
        {
          icon: <FaChalkboardTeacher />,
          text: "Class, subject, and timetable management",
        },
        { icon: <FaCalendar />, text: "Attendance and academic records" },
        { icon: <FaLock />, text: "Secure login and data handling" },
      ],
    },
    {
      id: 2,
      title: "Restaurant Management System",
      subtitle: "Smart Campus Dining Solution",
      image: "/images/food-and-beverage-distribution-software.png",
      description:
        "RestaurantSys is a smart web-based dining management system designed to simplify meal access, payments, and tracking for campus restaurants. It provides a fast, cashless, and organized dining experience for students, staff, and visitors.",
      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      features: [
        { icon: <FaQrcode />, text: "QR code and ticket-based meal access" },
        {
          icon: <FaCreditCard />,
          text: "Digital payments and meal subscriptions",
        },
        {
          icon: <FaUsers />,
          text: "Multi-user support (students, staff, visitors)",
        },
        { icon: <FaUtensils />, text: "Real-time balance and meal tracking" },
        {
          icon: <FaLock />,
          text: "Secure browser-based system (no app required)",
        },
      ],
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlights of my major projects demonstrating skills in full-stack
            development, system design, and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        {feature.icon} {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
