import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// styles
import './Footer.css';

const Footer = () => (
  <nav className="footer-container">
    <div>
      <h3>Grow with us.</h3>
      <small>2131 Washington St. Boston, MA 02119</small>
      <small>(617) 816-7067</small>
      <small>© 2023 Bodhi Farm Hydroponics Cannabis Lab</small>
    </div>

    <div>
      <h3>FAQ</h3>
      <h3>Contact</h3>
      <h3>Equipment</h3>
      <h3>Tourism</h3>
    </div>

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
