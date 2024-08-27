import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section footer__links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__section footer__social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
        </ul>
      </div>
      <div className="footer__section footer__copy">
        <p>&copy; 2024 Connecting. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
