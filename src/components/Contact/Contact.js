import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-ribbon">
            <div className="ribbon-top">YUVRAJ CHOUDHARY</div>
            <div className="ribbon-bottom">A FULL-STACK DEVELOPER</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/yuvraj-choudhary-921087246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/YuvrajChoudharyJnu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="mailto:yuvrajchoudhary9001@gmail.com">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href="https://github.com/YuvrajChoudharyJnu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2024 ❤️ © Designed and built by Yuvraj Choudhary.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
