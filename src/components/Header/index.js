import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <nav className="navbar-menu">
        <div className="navbar-wrapper container">
          <a href="/" className="navbar-brand">
            <img
              src="assets/logo.svg"
              style={{ height: "100px", width: "200px" }}
              alt="minprograms"
            />
          </a>

          <div className="navbar-menu-container mobile">
            <ul className="navbar-items">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
