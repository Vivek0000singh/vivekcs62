import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

import { images } from "../../constants";

const skills = [
  {
    name: "Java",
    icon: images.java,
  },
  {
    name: "React js",
    icon: images.react,
  },
  {
    name: "JavaScript",
    icon: images.javascript,
  },
  {
    name: "Node js",
    icon: images.node,
  },
  {
    name: "HTML",
    icon: images.html,
  },
  {
    name: "CSS",
    icon: images.css,
  },
  {
    name: "MUi-5",
    icon: images.mu5,
  },
  {
    name: "C++",
    icon: images.cpp,
  },
  {
    name: "MongoDB",
    icon: images.mongodb,
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
