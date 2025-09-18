import { useState } from "react";
import '../App.css';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
      setMenuOpen(false);  // Close the menu when a link is clicked
  };
  
    return (
      <nav className="navbar">
        <div className="logo">ARCHANA</div>
  
        <div className="hamburger" onClick={handleMenuToggle}>
  {menuOpen ? (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2"/>
      <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <line x1="4" y1="6" x2="20" y2="6" stroke="white" strokeWidth="2"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2"/>
      <line x1="4" y1="18" x2="20" y2="18" stroke="white" strokeWidth="2"/>
    </svg>
  )}
</div>


  
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#qualification" onClick={handleLinkClick}>Qualification</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    );
  }
export default Navigation;