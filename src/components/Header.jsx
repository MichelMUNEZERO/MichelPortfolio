import React, { useState } from "react";
import { TbHexagon } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">
              <TbHexagon />
            </span>
            <span className="logo-text">Michel M.</span>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenu />
          </button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pages">Pages</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact" className="btn-contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
