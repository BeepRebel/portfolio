import React from "react";
import "./navbar.css";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "resume" },
  { label: "Contact", id: "contact" }

];

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("about")}>
        Charvi
      </div>
      <ul>
  {navItems.map((item) => (
    <li key={item.id} onClick={() => scrollToSection(item.id)}>
      {item.label}
    </li>
  ))}
  {/* Resume download */}
  <li>
    <a
      href={`${process.env.PUBLIC_URL}/Charvi_Pahuja_CV.pdf`}
      download
      className="nav-link-custom"
    >
      Resume
    </a>
  </li>

  {/* Codefolio external link */}
  <li>
    <a
      href="https://your-codefolio-link.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-link-custom"
    >
      Codefolio <i className="fas fa-external-link-alt" style={{ fontSize: "0.9rem" }}></i>
    </a>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
