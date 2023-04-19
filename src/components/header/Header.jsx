import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper flex-row">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="header-menu flex-row">
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="/music">music</Link>
            </li>
            <li>
              <Link to="/working-on">working on</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
