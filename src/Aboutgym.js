import React from "react";
import "./Aboutgym.css";

function Aboutgym() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <h4>About Our Gym</h4>
          <h2>Transform Your Body, Transform Your Life</h2>
          <p>
            We are a professional fitness center dedicated to helping you
            achieve your health and fitness goals. Our gym is equipped with
            modern machines, expert trainers, and a motivating environment.
          </p>
          <p>
            Whether you're a beginner or a professional athlete, we provide
            customized workout plans to help you stay strong, confident, and
            healthy.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Content */}
        <div className="about-image">
          <img
            src= "/img4.jpg"
            alt="Gym"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutgym;


import {themecontext } from React;
export const themecontext =creatcontext();