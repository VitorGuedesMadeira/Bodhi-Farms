import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

// styles
import './Footer.css';

const Footer = () => (
  <nav className="footer-container">
    <small>© 2023 Bodhi Farm Hydroponics Cannabis Lab</small>
    <ul>
      <li>
        <a href="www.google.com" alt="instagram">
          <FaInstagram className="icon" />
        </a>
      </li>
      <li>
        <a href="www.google.com" alt="linkedin">
          <FaLinkedin className="icon" />
        </a>
      </li>
      <li>
        <a href="www.google.com" alt="facebook">
          <FaFacebook className="icon" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Footer;
