import React from "react";
import { motion } from "framer-motion";
import ReadMoreReact from "read-more-react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import { images } from "../../constants";

const about = [
  {
    title: "Web Developmment",
    description:
      "I am a good web developer and passionate about creating stunning and functional websites that reflect a brand's personality and values. Let's work together to bring your vision to life.",
    imgUrl: images.about01,
  },
  {
    title: "Frontend",
    description:
      " I have a passion for creating beautiful and intuitive user interfaces. With my expertise in HTML, CSS, and JavaScript, I specialize in crafting seamless user experiences that delight and engage. I take pride in my attention to detail and my ability to turn complex designs into elegant and efficient code.",
    imgUrl: images.about02,
  },
  {
    title: "Backend",
    description:
      "I have some backend knowledge with some experience in Node.js and Express.I have a good understanding of Node.js and I'm familiar with popular packages like Express, which allows me to build scalable and performant APIs quickly. I have experience with database like MongoDB and I enjoy using them to store and manage data. Although I have less knowledge than some other developers but I'm always eager to learn and improve my skills.",
    imgUrl: images.about03,
  },
  {
    title: "MERN",
    description:
      "MERN stands for MongoDB, ExpressJS, ReactJS, and NodeJS, which are the technologies I use to build web applications. I have experience in developing full-stack applications, working on the front-end using ReactJS and on the back-end using NodeJS and ExpressJS. I also have knowledge of database management using MongoDB. In my free time, I enjoy exploring new technologies and keeping up-to-date with the latest developments in the web development industry.",
    imgUrl: images.about04,
  },
];

const About = () => {
  //   const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className="p-text"
              style={{
                marginTop: 10,
              }}
            >
              <ReadMoreReact
                text={about.description}
                min={80}
                readMoreText="...read more"
              />
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
