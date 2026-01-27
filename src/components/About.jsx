import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="/images/Michel-MUNEZERO.PNG"
                alt="Michel MUNEZERO - Computer Science Student"
                className="profile-photo"
              />
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">
              Computer Science Student &
              <br />
              Web Designer
            </h2>
            <p className="about-description">
              I'm a passionate Computer Science student at the University of
              Rwanda, specializing in web design and development. I create
              stylish, modern websites and digital experiences. Recently, I've
              begun exploring cybersecurity and completed a certification course
              at TechCrush. I'm always eager to learn new technologies and take
              on challenging projects.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">University:</span>
                <span className="info-value">University of Rwanda</span>
              </div>
              <div className="info-item">
                <span className="info-label">Major:</span>
                <span className="info-value">Computer Science</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Kigali, Rwanda</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">michelmunezero25@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Specialization:</span>
                <span className="info-value">Web Design & Development</span>
              </div>
              <div className="info-item">
                <span className="info-label">Certification:</span>
                <span className="info-value">
                  <a
                    href="https://drive.google.com/file/d/1vl-I_YBD6sXtpX7_U2QFXoBwpgXlFQCN/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary-color)" }}
                  >
                    TechCrush - Cybersecurity
                  </a>
                </span>
              </div>
            </div>

            <button className="btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
