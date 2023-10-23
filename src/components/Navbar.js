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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
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
