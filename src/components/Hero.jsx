import React, { useEffect, useState } from "react";
import "./Hero.css";
const roles = [
  "Michel MUNEZERO",
  "Frontend Developer",
  "Cybersecurity Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timerId;

    if (charIndex < currentRole.length) {
      timerId = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      timerId = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timerId);
  }, [charIndex, roleIndex]);

  const text = roles[roleIndex].substring(0, charIndex);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm
              <span className="hero-name typing">{text}|</span>
            </h1>
            <p className="hero-description">
              I'm a Computer Science student at College of Science and
              Technology - University of Rwanda with a passion for web design. I
              specialize in creating clean, modern, and responsive websites.
              Currently expanding my expertise into cybersecurity, having
              completed a certification course at TechCrush and Forward Edge
              Cybersecurity Bootcamp. I'm dedicated to delivering high quality
              solutions that meet user needs.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire me
            </button>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years Studying</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Certification</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src="/images/Michel-MUNEZERO.PNG"
                alt="Michel MUNEZERO"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
