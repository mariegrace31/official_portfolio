import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="nav-bar">
      <p>
        Bmg
        <span>.</span>
      </p>
      <div className={`Nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="projects">PROJECTS</a>
          </li>
          <li>
            <a href="contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-toggle" role="button" tabIndex="0" onKeyDown={toggleMobileMenu} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? (
          <FaTimes className="close" />
        ) : (
          <FaBars className="bars" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
