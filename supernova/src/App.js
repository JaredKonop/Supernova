import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Bandanas from "../src/pages/Bandanas";
import CustomForm from "../src/pages/CustomForm";
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
          <Route path="/custom-items" element={<CustomItems />} />
          <Route path="/custom-form" element={<CustomForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
