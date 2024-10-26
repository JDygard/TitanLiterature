import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "./Header.css";
import MailerLite from '../components/MailerLite';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <header className="header">
      <div class ="header_container">
        <div class ="logo">
      <span onClick={() => handleClick('/')}>
        <img height="100px" src="images/banner1.png" alt="Titan by Michael Goe" className="header__image" />
      </span>
      </div>
      
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__item"><span onClick={() => handleClick('/')}>Home</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/about')}>About</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/books')}>Books</span></li>
          {/* <li classname="header_item"><MailerLite /></li> */}
        </ul>
      </nav>
      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>
      
      </div>
    </header>
  );
};

export default Header;
