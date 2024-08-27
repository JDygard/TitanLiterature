import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__item"><a href="#home" className="header__link">Home</a></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><a href="#about" className="header__link">About</a></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
