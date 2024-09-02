import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">

     
      <div className="footer__section footer__links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Books</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="footer__section footer__social">
        <h3>Social</h3>
        <ul>
          <li><a href="https://discord.gg/DfyfVfcgtV" target="blank"><img height="35px" src="images/discord_white_small.png" /></a></li>
          <li><a href="https://www.facebook.com/people/Michael-Goe/61565446521984/" target="blank"><img height="35px" src="images/fb_white_small.png" /></a></li>
          <li><a href="https://x.com/mgoenovels" target="blank"><img height="35px" src="images/twitter_white_small.png" /></a></li>
        </ul>
      </div>
      <div className="footer__section footer__copy">
        <p>Copyright &copy; 2024 Michael Goe. All rights reserved.</p>
      </div>
      
    </div>
  </footer>
);

export default Footer;
