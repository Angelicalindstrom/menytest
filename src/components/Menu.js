import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="navbar">
      <div className="menu-container">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/pictures" className="nav-link">
              Pictures
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/json" className="nav-link">
              Json
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
