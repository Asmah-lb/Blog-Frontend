import React from "react";

import Register from "./components/RegisterPage";
import Login from "./components/LoginPage";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Tag from "./pages/tag";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
