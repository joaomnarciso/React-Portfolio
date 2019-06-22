import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ logo }) => (
  <nav className="navbar navbar-expand-xl navbar-dark bg-dark shadow">
    <Link className="navbar-brand" to="/">
      {logo}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample06"
      aria-controls="navbarsExample06"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample06">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
