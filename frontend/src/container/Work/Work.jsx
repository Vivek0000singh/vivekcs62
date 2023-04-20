import React from "react";

import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

import { images } from "../../constants";

const filterWork = [
  {
    title: "Conquer",
    description:
      "With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples.",
    imgUrl: images.Conquer,
    ProjectLink: "https://conquer-78.netlify.app/",
  },
  {
    title: "Mine Utube",
    description: "This app is basically clone of the Youtube.",
    imgUrl: images.utube,
    ProjectLink: "https://mine-utube.netlify.app/",
  },
  {
    title: "keep-on app",
    description:
      " This app is used for tracking the list of tasks you need to complete or things that you want to do.",
    imgUrl: images.keeper,
    ProjectLink: "https://keep-on.netlify.app/",
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.ProjectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
