import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div>
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
              at TechCrush and Forward Edge Cybersecurity Bootcamp. I'm always
              eager to learn new technologies and take on challenging projects.
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
                <ul className="specialization-list">
                  <li className="specialization-item">
                    <span className="info-value">Web Design & Development</span>
                  </li>
                  <li className="specialization-item">
                    <span className="info-value">Cybersecurity Enthusiast</span>
                  </li>
                </ul>
              </div>
              <div className="info-item">
                <span className="info-label">Certification:</span>
                <ul className="certification-list">
                  <li className="certification-item">
                    <span className="info-value">
                      <a
                        href="https://drive.google.com/file/d/1w9yA3qnPCVBXtUtU2ismjw991_sKjWET/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Techcrush Bootcamp in Cybersecurity
                      </a>
                    </span>
                  </li>

                  <li className="certification-item">
                    <span className="info-value">
                      <a
                        href="https://drive.google.com/file/d/1BxEyEjYV_ucAjKnywsYj20nphryr3_97/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Forward Edge Cybersecurity Bootcamp 5.0
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cv-buttons">
              <a
                href="https://drive.google.com/file/d/1GNkQ-WEvBUnnCnyyGIPmHa80tria_TO-/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">View CV</button>
              </a>
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1GNkQ-WEvBUnnCnyyGIPmHa80tria_TO-&export=download"
                download="Michel_MUNEZERO_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
