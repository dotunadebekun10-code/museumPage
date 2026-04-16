import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

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
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/collections" onClick={() => setIsNavOpen(false)}>Collections</Link></li>
          <li><Link to="/exhibitions" onClick={() => setIsNavOpen(false)}>Exhibitions</Link></li>
          <li><Link to="/visit" onClick={() => setIsNavOpen(false)}>Visit</Link></li>
          <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
