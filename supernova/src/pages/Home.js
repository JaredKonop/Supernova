import React from "react";
import "../styles/page.css";
import logo from "../assets/Nova Pic.png";

const Home = () => {
  return (
    <div className="page">
      <h1>About Me!</h1>
      <div className="content">
        <img src={logo} alt="Nova Pic" className="nova-pic" />
        <p>Welcome to Supernova Designs! The inspiration behind this company is the pup to the left, Nova. She is a Bernedoodle that loves toys and treats, along with laying around all day. Please take a look around!</p>
      </div>
    </div>
  );
};

export default Home;
