import React from "react";
import "./Homegym.css";

function Homegym() {
  // Function to scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="gym-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Body</h1>
          <p>Train harder. Get stronger. Be your best.</p>
          {/* Scroll to contact when clicked */}
          <button className="hero-btn" onClick={scrollToContact}>
            Join Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Modern Equipment</h3>
          <p>Top-class machines for strength & cardio training.</p>
        </div>

        <div className="feature-card">
          <h3>Expert Trainers</h3>
          <p>Certified trainers to guide and motivate you.</p>
        </div>

        <div className="feature-card">
          <h3>Flexible Plans</h3>
          <p>Affordable plans designed for everyone.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Fitness Journey Today</h2>
        <button className="cta-btn" onClick={scrollToContact}>
          Get Membership
        </button>
      </section>
    </div>
  );
}

export default Homegym;
