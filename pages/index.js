import BackgroundAnimation from "../components/Background";
// import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

import React, { useEffect } from "react";

import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Experience from "../components/Exprience";

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
            Hello, I&apos;m Chris Wong, a System Engineer with three years of experience. I enjoy tackling complex problems and am dedicated to delivering high-quality work. Looking forward to collaborating with others in the industry.          </motion.p>
        </div>
        <Link href="#experience" scroll={false}>
          <div className={HomeStyles.more}>
            <FontAwesomeIcon icon={faChevronDown} size={30} />
          </div>
        </Link>
        <BackgroundAnimation />
      </motion.div>

      <Experience />
      {/* <Projects /> */}
      <Technologies />
      <Footer />
    </>
  );
}
