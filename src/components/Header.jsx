import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "./Header.css";

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
      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>
      <a href="#home" className="header__link"><img height="100px" src="images/banner1.png" alt="Titan by Michael Goe" /></a>
      <span onClick={() => handleClick("/read")}>Read my book.</span>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__item"><span onClick={() => handleClick('/home')}>Home</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/about')}>About</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/contact')}>Contact</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
