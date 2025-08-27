import { useEffect, useState } from "react";
import "./HeroSectionCSS.css";
import { motion } from "framer-motion";
import TechGlobe from "../TechGlobe/TechGlobe";

const TypingEffect = ({ text, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if (loop) {
        timeout = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 2000);
      }
    };

    const interval = setInterval(typeText, speed);
    return () => {
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [index, text, speed, loop]);

  return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Updated resume link with proper sharing settings
  const resumeLink = "https://drive.google.com/file/d/1KgLW4VzHkgFMyZS0vjRSGr3G9Lr1Mgs9/view?usp=sharing";

  return (
    <div className="hero-container">
      <div className="availability-badge shine-button">
        <div className="ping-dot" />
        <p>Available for new projects</p>
      </div>
      
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <TypingEffect text="Hi, I'm Yuvraj Choudhary." speed={200} loop={true} />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            I build things for the WEB
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            Discover the bespoke solutions and projects delivered.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.7 }}
          >
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="join-button shine-button"
            >
              My Resume
            </a>
            <a 
              href="mailto:yuvrajchoudhary9001@gmail.com" 
              className="contact-link shine-button"
            >
              Mail Me
            </a>
          </motion.div>
        </div>
        <TechGlobe />
      </div>
    </div>
  );
};

export default HeroSection;
