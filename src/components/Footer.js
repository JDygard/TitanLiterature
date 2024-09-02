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
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Books</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer__section footer__social">
          <h3>Social</h3>
          <ul>
            <li className="header__item"><span onClick={() => handleClick('/home')}>Home</span></li> {/* In this call to the handleClick function */}
            <li className="header__item"><span className="header__bullet">•</span></li>
            <li className="header__item"><span onClick={() => handleClick('/about')}>About</span></li> {/* That thing in the parentheses gets passed to the function above */}
            <li className="header__item"><span className="header__bullet">•</span></li>
            <li className="header__item"><span onClick={() => handleClick('/contact')}>Contact</span></li>
          </ul>
        </div>
        <div className="footer__section footer__copy">
          <p>Copyright &copy; 2024 Michael Goe. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
