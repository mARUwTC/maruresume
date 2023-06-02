import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React from "react";

import HomeStyles from "../styles/home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Experience from "../components/Exprience";
import BackgroundAnimation from "../components/BGindex";

export function ToExp() {
  var to = document.getElementById("experience");
  to.scrollIntoView({ behavior: 'smooth' }, true);
}

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: { ease: "easeInOut" },
          },
        }}
      >
        <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{ scale: 1, opacity: 1, y: "0" }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{ scale: 0, opacity: 0, y: "-100vh" }}
          >
            Welcome To My Personal Portfolio
          </motion.h1>
          <motion.p
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
            style={{ textAlign: "justify" }}
          >
            Hello, I&apos;m Chris Wong, a System Engineer with three years of experience. I enjoy tackling complex problems and am dedicated to delivering high-quality work.
          </motion.p>
        </div>
        <div className={HomeStyles.more} onClick={ToExp}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <BackgroundAnimation />
      </motion.div>

      <Experience />
      <Technologies />
      <Footer />
    </>
  );
}
