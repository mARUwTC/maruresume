import React, { useState } from "react";
import AboutStyles from "../styles/about.module.css";
import { motion } from "framer-motion";

import Year from "../components/Year";
import Footer from "../components/Footer";

const About = () => {
  const [year, setYear] = useState([
    {
      id: "1",
      numyear: "2019",
      para: "Graduated and started working",
    },
    {
      id: "2",
      numyear: "2020",
      para: "Worked as a project engineer",
    },
    {
      id: "3",
      numyear: "2021",
      para: "Worked as a one-man band IT officer",
    },
    {
      id: "4",
      numyear: "2022",
      para: "Worked as an experienced system engineer",
    },
    {
      id: "5",
      numyear: "2023",
      para: "Keep going on...",
    },
  ]);
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "100vw", opacity: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.5,
          type: "spring",
          stiffness: 130,
        }}
        exit="exit"
        variants={{
          exit: {
            x: "-100vw",
            transition: { ease: "easeInOut" },
          },
        }}
        className={AboutStyles.about}
      >
        <h1>About Me</h1>
        <div className={AboutStyles.text}>
          <p>
            With 3 years of experience in the information technology field, I have developed expertise in system security management, networking, and system management. Additionally, I have honed my skills in IT project management and implementation.
          </p>
          <div className={AboutStyles.yearslist}>
            {year.map((y) => {
              return <Year title={y.numyear} para={y.para} key={y.id} />;
            })}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
