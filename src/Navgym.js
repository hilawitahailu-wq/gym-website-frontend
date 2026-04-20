import React from "react";
import "./Navgym.css";

function Navgym() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <h2>GYM<span>PRO</span></h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#gallery">Gallery</a></li>
    
        <li><a href="#contact">Contact Us</a></li>
      </ul>

    </nav>
  );
}

export default Navgym;
