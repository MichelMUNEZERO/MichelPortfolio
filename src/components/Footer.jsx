import React from "react";
import {
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { TbHexagon } from "react-icons/tb";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon">
                <TbHexagon />
              </span>
              <span className="logo-text">Michel M.</span>
            </div>
            <p className="footer-description">
              Computer Science student at University of Rwanda, passionate about
              web design and cybersecurity. Creating modern digital experiences
              and continuously learning new technologies.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Web Design</a>
              </li>
              <li>
                <a href="#services">UI/UX Design</a>
              </li>
              <li>
                <a href="#services">Development</a>
              </li>
              <li>
                <a href="#services">Branding</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope /> michelmunezero25@gmail.com
              </li>
              <li>
                <FaGraduationCap /> University of Rwanda
              </li>
              <li>
                <FaMapMarkerAlt /> Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Michel MUNEZERO. All rights reserved.</p>
          <div className="social-links">
            <a
              href="http://linkedin.com/in/michelmunezero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/MichelMUNEZERO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/lehcimunna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/lechimunnaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
