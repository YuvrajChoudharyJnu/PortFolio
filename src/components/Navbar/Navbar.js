import React, { useState, useRef, useEffect, useContext } from "react";
import "./NavbarCSS.css";
import { ThemeContext } from "../../ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Logo from "../../images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setCurrentSection(href.replace("#", ""));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: "About Me", href: "#AboutMe" },
    { label: "Education", href: "#Education" },
    { label: "Skills", href: "#Skills" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Achievement", href: "#Achievement" },
    { label: "Coding Profiles", href: "#Coding-profiles" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <nav className={`navbar ${theme}`}>
      <a className="logo" href="/Portfolio">
        <img src={Logo} alt="Logo" className="logo-img" />
      </a>
      <div className="navbar-right">
        <div className={`navbar-center ${menuOpen ? "active" : ""}`} ref={menuRef}>
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              whileHover={{
                scale: 1.1,
                color: theme === "dark" ? "#0dcaf0" : "#1a73e8",
                textShadow: theme === "dark" ? "0 0 8px rgba(13, 202, 240, 0.8)" : "none"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`nav-link-animated ${
                currentSection === link.href.replace("#", "") ? "active-link" : ""
              }`}
              style={{
                color: theme === "dark" ? "#ffffff" : "#333333"
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="navbar-right-icons">
          <motion.div
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ rotate: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              color: theme === "dark" ? "#ffffff" : "#333333"
            }}
          >
            {theme === "light" ? (
              <MdDarkMode className="theme-icon" title="Dark Mode" />
            ) : (
              <MdLightMode className="theme-icon" title="Light Mode" />
            )}
          </motion.div>

          {menuOpen ? (
            <AiOutlineClose 
              className="navbar-menu-icon" 
              onClick={handleMenuToggle}
              style={{
                color: theme === "dark" ? "#ffffff" : "#333333"
              }}
            />
          ) : (
            <GiHamburgerMenu 
              className="navbar-menu-icon" 
              onClick={handleMenuToggle}
              style={{
                color: theme === "dark" ? "#ffffff" : "#333333"
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;