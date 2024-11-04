import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContent";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {user, handleChange } = useAuthContext();

  console.log(email, password);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://blog-platform-7q0v.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(res, data);
      handleChange(data.data.user, data.token);
      alert(data.message);

    } catch (err) {
      console.log(err.message);
      handleChange(data.data.user, data.token);
      alert(data.message);
      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function(){
      if(user) {
        navigate('/dashboard')
      }
  }, [user])

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login into your account!</h1>
        <div className="login-box">
          <input
            type="email"
            className="text-box"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="text-box"
            placeholder="Password*"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="btn">
        <button type="submit" onClick={handleLogin} className="login-btn">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <NavLink to="/signup" className="login-nav">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
export default Login;
