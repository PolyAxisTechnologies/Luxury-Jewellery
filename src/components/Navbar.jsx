import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${isScrolled || location.pathname !== "/" ? "navbar-gold" : ""}`}>
      <nav className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">
          Ivory & Gold
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div 
          className={`navbar-hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/collections" ? "active" : ""}>
            <Link to="/collections">Collections</Link>
          </li>
          <li className={location.pathname === "/products" ? "active" : ""}>
            <Link to="/products">Products</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className="mobile-action">
            <button className="navbar-btn">Enquire</button>
          </li>
        </ul>

        {/* Action */}
        {/* <div className="navbar-action desktop-action">
          <button className="navbar-btn">
            Enquire
          </button>
        </div> */}
      </nav>
    </header>
  );
}