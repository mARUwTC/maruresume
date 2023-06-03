import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import ProjectStyles from "../styles/projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {

  const [refTitle, inViewTitle] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };
  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>
      <motion.div
        className={ProjectStyles.cardgroup}
        ref={refTitle}
        initial="hidden"
        animate={inViewTitle ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="card card1">
          <Image
            src="/pro.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>Dynamic Portfolio</h1>
          <hr />
          <p>
            A dynamic profolio webpage using Next.js.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button>
              <Link href="https://github.com/mARUwTC/maruresume" target="_blank">Code</Link>
            </button>
            {/* <button>Source</button> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
