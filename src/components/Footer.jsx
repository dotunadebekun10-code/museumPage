import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            The Museum of Art and Culture celebrates local and international creativity, 
            showcasing sculptures, paintings, and abstract art that inspire culture and history.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/exhibitions">Exhibitions</Link></li>
            <li><Link to="/visit">Visit</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@Museumofartandculture.com</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Museum of Art and Culture | Celebrating Culture & Creativity</p>
      </div>
    </footer>
  );
};

export default Footer;
