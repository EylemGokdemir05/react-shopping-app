import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Card from "./Card";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="basket">
        <p>₺ 39,97</p>
      </div>
    </nav>
  );
};

export default Navbar;
