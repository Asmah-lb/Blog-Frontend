import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = function () {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="header">
      <NavLink to="/" className="header-text">
        <h3>Starter</h3>
      </NavLink>

      <div className="nav-link">
        <NavLink
          to="/about"
          className="header-link"
          style={
            location.pathname === "/about"
              ? { textDecoration: "underline" }
              : {}
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className="header-link"
          style={
            location.pathname === "/blog" ? { textDecoration: "underline" } : {}
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/tag"
          className="header-link"
          style={
            location.pathname === "/tag" ? { textDecoration: "underline" } : {}
          }
        >
          Tags
        </NavLink>

        <NavLink
          to="/login"
          className="header-link"
          style={
            location.pathname === "/login" ? { textDecoration: "underline" } : {}
          }
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
