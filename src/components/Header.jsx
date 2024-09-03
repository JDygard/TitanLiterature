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
      <span onClick={() => handleClick('/')}>
        <img height="100px" src="images/banner1.png" alt="Titan by Michael Goe" className="header__image" />
      </span>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__item"><span onClick={() => handleClick('/')}>Home</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/about')}>About</span></li>
          <li className="header__item"><span className="header__bullet">•</span></li>
          <li className="header__item"><span onClick={() => handleClick('/books')}>Books</span></li>
        </ul>
      </nav>
      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
