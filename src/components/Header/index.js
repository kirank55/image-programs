import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <nav className="navbar-menu">
        <div className="navbar-wrapper container">
          <a href="/" className="navbar-brand">
            {/* <img
              src="assets/logo.svg"
              style={{ height: "100px", width: "200px" }}
              alt="minprograms"
            /> */}
            <h3>IMAGE PROGRAMS</h3>
          </a>

          <div className="navbar-menu-container mobile">
            <ul className="navbar-items">
              <li>
                <Link to={"/converter"}>
                  <span>Image Converter</span>
                </Link>
              </li>
              <li>
                <Link to={"/compress"}>
                  <span>Image Compressor</span>
                </Link>
              </li>
              <li>
                <Link to={"/editor"}>
                  <span>Image Editor</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
