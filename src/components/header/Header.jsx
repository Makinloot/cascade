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
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">music</a>
            </li>
            <li>
              <a href="#">working on</a>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
