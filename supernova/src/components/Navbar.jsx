import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (document.documentElement.scrollTop > 50) {
        nav.classList.add("affix");
      } else {
        nav.classList.remove("affix");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavTriggerClick = () => {
    const navTrigger = document.querySelector(".navTrigger");
    const mainListDiv = document.querySelector("#mainListDiv");
    navTrigger.classList.toggle("active");
    mainListDiv.classList.toggle("show_list");
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bandanas">Bandanas</Link>
            </li>
            <li>
              <Link to="/custom-items">Custom items</Link>
            </li>
            <li>
              <Link to="/custom-form">Custom Form</Link>
            </li>
          </ul>
        </div>
        <span className="navTrigger" onClick={handleNavTriggerClick}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
