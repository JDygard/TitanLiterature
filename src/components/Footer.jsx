import React from 'react';
import { useNavigate } from 'react-router-dom'  // We imported the useNavigate function here
import './Footer.css';

const Footer = () => {

  const navigate = useNavigate(); // we make a variable that points at the function

  const handleClick = (path) => { // and when someone clicks on the button
    navigate(path); // we navigate to the path defined
  };
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li className="header__item"><span onClick={() => handleClick('/')}>Home</span></li> {/* In this call to the handleClick function */}
            <li className="header__item"><span onClick={() => handleClick('/about')}>About</span></li> {/* That thing in the parentheses gets passed to the function above */}
            <li className="header__item"><span onClick={() => handleClick('/books')}>Books</span></li>
          </ul>
        </div>
        <div className="footer__section footer__social">
        <h3>Social</h3>
        <ul>
          <li><a href="https://discord.gg/DfyfVfcgtV" target="blank"><img height="35px" src="images/discord_white_small.png" alt="Official Discord" /></a></li>
          <li><a href="https://www.facebook.com/people/Michael-Goe/61565446521984/" target="blank"><img height="35px" src="images/fb_white_small.png" alt="Author Page" /></a></li>
          <li><a href="https://x.com/mgoenovels" target="blank"><img height="35px" src="images/twitter_white_small.png" alt="Official Twitter" /></a></li>
        </ul>
        </div>
        <div className="footer__section footer__copy">
        <h3>Titan by Michael Goe</h3>
        <ul>
          <li>Copyright &copy; 2024 Michael Goe. All rights reserved.</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
