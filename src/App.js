import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./pages/Card";
function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes >
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/card">
    //       <Card />
    //     </Route>
    //   </Routes>
    // </Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
