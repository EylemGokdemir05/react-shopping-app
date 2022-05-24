import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Card from "./pages/Card";
function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>
  );
}

export default App;
