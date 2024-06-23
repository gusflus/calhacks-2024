import React from "react";
import "./Navbar.css";

const Navbar = ({ logout = false }: { logout?: boolean }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            <img
              src={require("../assets/logo-long.png")}
              alt="Phoenix Health Logo"
            />
          </a>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={logout ? "/" : "/login"} className="nav-link">
                {logout ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
