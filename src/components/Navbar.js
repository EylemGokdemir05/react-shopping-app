import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Card from "./Card";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/card"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "6px",
          }}
        >
          Basket
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
