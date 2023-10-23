import React from 'react';

const Navbar = () => (
  <div className="nav-bar">
    <p>
      Bmg
      <span>.</span>
    </p>
    <div className="Nav-links">
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
  </div>
);

export default Navbar;
