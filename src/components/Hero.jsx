import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm
              <br />
              <span className="hero-name">Michel MUNEZERO</span>
            </h1>
            <p className="hero-description">
              I'm a Computer Science student at College of Science and
              Technology - University of Rwanda with a passion for web design. I
              specialize in creating clean, modern, and responsive websites.
              Currently expanding my expertise into cybersecurity, having
              completed a certification course at TechCrush. I'm dedicated to
              delivering high-quality solutions that meet user needs.
            </p>
            <button className="btn-primary">Hire me</button>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>
                  3 <span>+</span>
                </h3>
                <p>Years Studying</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>1</h3>
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
