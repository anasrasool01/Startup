import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src={logo}
          alt="Company Logo"
          className="company-logo"
        />
      </div>
      <nav className="header-right">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Services</a>
            <ul className="dropdown">
              <li>
                <a href="#">Invoicing system</a>
              </li>
              <li>
                <a href="#">DHL</a>
              </li>
              <li>
                <a href="#">POS</a>
              </li>
              <li>
                <a href="#">Payment Gateway</a>
              </li>
              <li>
                <a href="#">GCC Cards</a>
              </li>
              <li>
                <a href="#">KIF</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Developer API</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#">Our App</a>
          </li>
          <li className="nav-item">
            <a href="#">Join</a>
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
