import React, { useState, useRef, useEffect } from "react";
import "./Contactgym.css";

function Contactgym({ focusField }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Ref for name input
  const nameRef = useRef(null);

  // Focus the name input when focusField prop is true
  useEffect(() => {
    if (focusField && nameRef.current) {
      nameRef.current.focus();
    }
  }, [focusField]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccess("Your message has been sent!");
          setErrors({});
          setFormData({ name: "", email: "", message: "" });
        } else {
          setErrors({ submit: result.error || "Failed to send message" });
          setSuccess("");
        }
      } catch (error) {
        setErrors({ submit: "Network error. Please try again." });
        setSuccess("");
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Get in touch with us for training, membership, or any questions
      </p>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3>My Contact Info</h3>
          <p>
            <strong>📍 Address:</strong> Addis Ababa, Ethiopia
          </p>
          <p>
            <strong>📞 Phone:</strong> +251 982622917
          </p>
          <p>
            <strong>📧 Email:</strong> hilawit.ahailu@gmail.com
          </p>
          <p>
            <strong>⏰ Working Hours:</strong><br />
            Mon – Sat: 11:00AM – 3:00 PM
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              ref={nameRef} // <-- attach ref here
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="success">{success}</p>}
            {errors.submit && <p className="error">{errors.submit}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactgym;
