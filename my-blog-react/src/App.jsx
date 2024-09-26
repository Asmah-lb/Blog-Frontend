import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import Register from "./pages/auth/signup";
import Login from "./pages/auth/login";

import Dashboard from "./pages/dashboard";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Tag from "./pages/tag";

const asmahObj ={

}

Cookies.set("asmah", asmahObj)

console.log(Cookies.get("asmah"))

const App = function () {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/tag" element={<Tag />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
