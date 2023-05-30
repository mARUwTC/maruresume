import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          P
        </motion.span>
        ortfolio
      </motion.h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className={NavStyle.iconlinks}>
        <li>
          <Link href="https://wa.me/85259432006" target="_blank"><i className="fab fa-whatsapp"></i></Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/chriswongtc" target="_blank"><i className="fab fa-linkedin"></i></Link>
        </li>
        <li>
          <Link href="https://github.com/mARUwTC" target="_blank"><i className="fab fa-github"></i></Link>
        </li>
        <div className={NavStyle.buttongroup}>
          <Link href="https://bit.ly/43BwJQx" target="_blank"><button>Résumé</button></Link>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
