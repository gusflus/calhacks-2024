import React from "react";

const Navbar = ({ logout = false }: { logout?: boolean }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/#/" className="navbar-logo">
            calhacks-2024
          </a>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href={logout ? "/#/" : "/#/login"}
                className="nav-link nav-cta"
              >
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
