import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    borderRadius: "20px", // To create a curved rectangle shape
    padding: "10px 20px", // Add padding to contain text
    transition: "background-color 0.3s", // Smooth transition effect
    backgroundColor: "transparent", // Default background color
  };

  const activeLinkStyle = {
    backgroundColor: "lightgrey",
    borderRadius: "20px",
    padding: "10px 20px",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/Home"
                  activeClassName="active-link"
                  style={linkStyle}
                  activeStyle={activeLinkStyle}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Skills"
                  activeClassName="active-link"
                  style={linkStyle}
                  activeStyle={activeLinkStyle}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Projects"
                  activeClassName="active-link"
                  style={linkStyle}
                  activeStyle={activeLinkStyle}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Resume"
                  activeClassName="active-link"
                  style={linkStyle}
                  activeStyle={activeLinkStyle}
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
