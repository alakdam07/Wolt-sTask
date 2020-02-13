import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-2">
        <div className="container">
          <Link
            to="/"
            className="brand-logo black-text"
            style={{
              position: "absolute",
              left: "150px"
            }}
          >
            Wolt
          </Link>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
