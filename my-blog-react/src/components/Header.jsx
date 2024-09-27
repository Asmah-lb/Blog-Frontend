import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContent";
import { FaUser } from "react-icons/fa";

const Header = function () {
  const location = useLocation();
  console.log(location.pathname);

  const {user, token} = useAuthContext();

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
        
        {(user || token) ? (
          <NavLink to="/dashboard" className="header-link"><FaUser style={{fontSize: "15px"}} /></NavLink>
        ) : (
        <NavLink
          to="/login"
          className="header-link"
          style={
            location.pathname === "/login"
              ? { textDecoration: "underline" }
              : {}
          }
        >
          Login
        </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
