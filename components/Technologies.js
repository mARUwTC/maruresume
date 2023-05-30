import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import TechStyles from "../styles/techns.module.css";
import Technologie from "./technologie";

const Technologies = () => {
  const [tech, setTech] = useState([
    {
      id: "1",
      tech: "fas fa-network-wired",
      title: "Networking",
      para: "Experience with Cisco, FortiGate,",
    },
    {
      id: "2",
      tech: "fas fa-user-secret	",
      title: "Security",
      para: "Experience with MDATP",
    },
    {
      id: "3",
      tech: "fas fa-server",
      title: "Infrastructure",
      para: "Experience with Windows, Ubuntu, Linix-like systems",
    },
    {
      id: "4",
      tech: "fab fa-react",
      title: "Front-End",
      para: "Experience with  React.js",
    },
    {
      id: "5",
      tech: "fab fa-node",
      title: "Back-End",
      para: "Experience with Node and Databases",
    },
  ]);

  const [refTitle, inViewTitle] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [refPara, inViewPara] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [refTech, inViewTech] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };

  const variants1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <div className={TechStyles.technologies} id="skills">
      <motion.h1
        ref={refTitle}
        initial="hidden"
        animate={inViewTitle ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <motion.p
        ref={refPara}
        initial="hidden"
        animate={inViewPara ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        I&apos;m familiar with a range of skills in the IT industry. From Infrastructure to Development.
      </motion.p>

      <motion.div
        className={TechStyles.techgroup}
        ref={refTech}
        initial="hidden"
        animate={inViewTech ? "visible" : "hidden"}
        variants={variants1}
        transition={{ duration: 0.5 }}
      >
        {tech.map((t) => {
          return (
            <Technologie
              title={t.title}
              para={t.para}
              tech={t.tech}
              key={t.id}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;