import React, { useState } from "react";
import "./navbar.css";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "resume" },
  { label: "Contact", id: "contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on link click (mobile)
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection("about")}>
          Charvi
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={menuOpen ? "active" : ""}>
          {navItems.map((item) => (
            <li key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          ))}

          <li>
            <a
              href={`${process.env.PUBLIC_URL}/Charvi_Pahuja_CV.pdf`}
              download
              className="nav-link-custom"
            >
              Resume
            </a>
          </li>

          <li>
            <a
              href="https://codolio.com/profile/BeepRebel"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-custom"
            >
              Codefolio <i className="fas fa-external-link-alt" style={{ fontSize: "0.9rem" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
