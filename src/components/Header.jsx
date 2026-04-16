import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header>
      <h1>Art Museum</h1>
      <nav className="navbar">
        <button 
          className="hamburger" 
          id="hamburger-btn" 
          aria-label="Menu"
          onClick={toggleNav}
        >
          ☰
        </button>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`} id="nav-links">
          <li><NavLink to="/" end onClick={() => setIsNavOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/collections" onClick={() => setIsNavOpen(false)}>Collections</NavLink></li>
          <li><NavLink to="/exhibitions" onClick={() => setIsNavOpen(false)}>Exhibitions</NavLink></li>
          <li><NavLink to="/visit" onClick={() => setIsNavOpen(false)}>Visit</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsNavOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
