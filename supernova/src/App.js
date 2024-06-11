import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Bandanas from "../src/pages/Bandanas";
import CustomClothes from "../src/pages/CustomClothes";
import CustomItems from "../src/pages/CustomItems";
import "../src/styles/navbar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bandanas" element={<Bandanas />} />
          <Route path="/custom-clothes" element={<CustomClothes />} />
          <Route path="/custom-items" element={<CustomItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
