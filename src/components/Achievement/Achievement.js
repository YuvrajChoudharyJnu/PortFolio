import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./AchievementCSS.css";

const achievementsData = [
  {
    text: (
      <>
        <span className="highlight2">Solved 450+ DSA</span> problems from geeksforgeeks (score 1300+) and maintaining a  <span className="highlight1">streak of 350+ days</span>.
      </>
    ),
    link: "https://www.geeksforgeeks.org/user/yuvrajchoudhary9001/",
  },
  {
    text: (
      <>
         Participant in <span className="highlight1">HackJNU</span> , a hackathon event hosted at JNU  <span className="highlight1">(Jawaharlal Nehru University)</span>.
      </>
    ),
    link: "https://hackjnu-3.devfolio.co/",
  },
  {
    text: (
      <>
         Built a network with <span className="highlight2">500+ LinkedIn</span>  connections and connected with some tech professionals and entrepreneurs.
      </>
    ),
    link: "https://www.linkedin.com/in/yuvraj-choudhary-921087246/",
  },
  {
    text: (
      <>
        2022-2023 Hostel committee , <span className="highlight1">JNU</span> New Delhi, India Management duties for more than <span className="highlight1">30+</span> event participants.
      </>
    ),
    link: "https://www.jnu.ac.in/main/",
  },
  {
    text: (
      <>
        <span className="highlight1">2021-Present Captain</span> , JNU Volleyball Team New Delhi, India Organized the annual sports event called <span className="highlight1">Kreeda</span>.
      </>
    ),
    link: "http://soe.jnu.ac.in/for-students/student-clubs-se/kreeda",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <i className="fa-solid fa-award achievement-icon"></i>
            <p className="achievement-text">
              {achievement.text}{" "}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                [Link]
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;