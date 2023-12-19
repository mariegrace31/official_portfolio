import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { SiWellfound } from 'react-icons/si';
import '../styles/Footer.css';

const Footer = () => {
  <footer className="footer">
    <p>&copy; 2023 Marie-Grace Bahati. All rights reserved.</p>
    <div className="socials">
      <a className="footer-icon" href="https://www.linkedin.com/in/marie-gr%C3%A2ce-bahati/" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin /></a>
      <a className="footer-icon" href="https://github.com/mariegrace31" target="_blank" rel="noreferrer" aria-label="github"><RiGithubFill /></a>
      <a className="footer-icon" href="https://twitter.com/mariegracebmg" target="_blank" rel="noreferrer" aria-label="twitter"><FaXTwitter /></a>
      <a className="footer-icon" href="https://wellfound.com/u/bahati-marie-grace" target="_blank" rel="noreferrer" aria-label="wellfound"><SiWellfound /></a>
    </div>
  </footer>;
};

export default Footer;
