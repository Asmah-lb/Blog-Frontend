import React from "react";
import { NavLink } from "react-router-dom";

const Login = function () {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Register Account</h1>
        <div className="login-box">
          <input type="text" className="text-box" placeholder="Email*" />
          <input type="text" className="text-box" placeholder="Password*" />
        </div>
      </div>

      <div className="btn">
        <button className="login-btn">Login</button>
        <NavLink to="/register" className="login-nav">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
export default Login;
