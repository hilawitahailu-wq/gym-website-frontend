import React from "react";
import "./Gallarygym.css";

// Define images array
const images = [
  "/img.jpg",
  "/img2.jpg",
  "/img3.jpg",
  
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg"
];

function Gallarygym() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Our Gym Gallery</h2>
      <p className="gallery-subtitle">
        Experience our training environment and facilities
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gym Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallarygym;
