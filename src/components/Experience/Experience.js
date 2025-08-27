import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻 Lead Developer",
      organization: "Car Workshop Management System (Freelance)",
      duration: "Live Project",
      details:
        "As the Lead Developer, I spearheaded the design and development of a full-stack web application for a local car workshop, a project that showcases my ability to manage and deliver a comprehensive technical solution. My work centered on creating a robust system using React.js for the frontend, powered by a Node.js and Express.js backend, with a PostgreSQL database to efficiently manage customer information, vehicle service records, and appointments. A key achievement was the successful implementation of a RESTful API and a responsive user interface built with Tailwind CSS, which provided dynamic dashboards for real-time tracking of work orders. By automating critical processes like scheduling and invoicing, I reduced the client’s manual administrative workload by a significant 40%, directly improving operational efficiency and supporting their business growth. This project demonstrates my proficiency across the entire development stack and my capacity to deliver impactful, client-focused solutions.",
    },
    {
      role: "🎓 Campus Ambassador",
      organization: "Unstop",
      duration: "Oct 2024 - Present",
      details:
        "Working as a campus ambassador at Unstop has been an incredible journey of learning and collaboration. Being part of a team dedicated to creating opportunities for students in our respective colleges has taught me the value of outreach and community-building. Our responsibilities range from organizing events and workshops to providing a supportive platform for students to grow and connect. The teamwork involved in planning and executing these initiatives has been an enriching experience, enhancing my organizational, communication, and leadership skills. At Unstop, I've realized the power of creating a community that empowers students to explore, learn, and excel. This role has not only allowed me to contribute to my college but also to develop a sense of purpose and fulfillment in helping others succeed.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Add staggered animation for items
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move into place with full opacity
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, // Delay between items
            }}
          >
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
