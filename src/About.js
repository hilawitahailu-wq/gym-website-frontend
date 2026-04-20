/*import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-container" id="about">
      <h1>About Me</h1>

      <h2>Background</h2>
      <p>
        I am Hilawit Assefa, a passionate Frontend Developer who loves building interactive and modern web applications using React. I enjoy learning new technologies and creating projects for my portfolio.
      </p>

      <h2>Education</h2>
      <ul>
        <li>Bachelor's Degree in information system, BDU University</li>
        <li>High School Diploma, menelik school</li>
      </ul>

      <h2>Experience</h2>
      <ul>
        <li>Internship at Tech Company, working on React projects</li>
        <li>Freelance projects: Portfolio website, Todo apps, Counter apps</li>
      </ul>
    </section>
  );
}

export default About;*/
// src/components/About/About.js
import React from "react";

import "./About.css";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
       
        
       
          
          

      
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            My name is HilawitAssefa. I'm a Fullstack Developer based
            in Ethiopia and I'm very passionate and dedicated to my work.
            With 1 years of experience as a beginner Fullstack Developer,
            I have acquired the skills necessary to build great websites.
          </p>

          <div className="about-details">
            <div>
              <strong>Name:</strong> HilawitAssefa
            </div>
            <div>
              <strong>Phone:</strong> +25182622917
            </div>
            <div>
              <strong>Experience:</strong> 1Years
            </div>
           
            <div>
              <strong>Age:</strong> 21
            </div>
            <div>
              <strong>Address:</strong> Ethiopia,Adiss abeba
            </div>
            
           
          </div>

          <a href="/cv2.pdf" className="btn" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


