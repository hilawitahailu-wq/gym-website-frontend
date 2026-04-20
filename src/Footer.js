import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Hilawit. All Rights Reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:yourname@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
