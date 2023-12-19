import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { SiWellfound } from 'react-icons/si';

const Footer = () => {
  <div className="footer">
    <p>&copy; 2023 Marie-Grace Bahati. All rights reserved.</p>
    <div className="social-media">
      <a className="contact-icon" href="https://www.linkedin.com/in/marie-gr%C3%A2ce-bahati/" aria-label="linkedin"><FaLinkedin /></a>
      <a className="contact-icon" href="https://github.com/mariegrace31" aria-label="github"><RiGithubFill /></a>
      <a className="contact-icon" href="https://twitter.com/mariegracebmg" aria-label="twitter"><FaXTwitter /></a>
      <a className="contact-icon" href="https://wellfound.com/u/bahati-marie-grace" aria-label="wellfound"><SiWellfound /></a>
    </div>
  </div>
}

export default Footer;
