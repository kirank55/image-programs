import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media-container">
        <p>FOLLOW US ON SOCIAL MEDIA</p>
        <div className="social-media-content">
          <Link to="/">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-pinterest"></i>
          </Link>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="container">
          <nav className="footer-menu">
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <p className="copyright">Copyright © 2023 — MinPrograms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
