import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import NavStyle from "../styles/nav.module.css";
import { useShowDiv } from "../functions/queryParam";

export function ToCV() {
  window.open("https://bit.ly/3WM41dy", '_blank').focus();
}

function Nav() {
  const showDiv = useShowDiv();
  return (
    <nav className={NavStyle.nav}>
      <Link href="/">
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
            Portfolio
          </motion.span>
        </motion.h1>
      </Link>
      <ul className={NavStyle.centerNav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className={NavStyle.iconlinks}>
        <li>
          <Link href="mailto:chriswong.621@outlook.com"><i className="fa fa-envelope"></i></Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/chriswongtc" target="_blank"><i className="fab fa-linkedin"></i></Link>
        </li>
        <li>
          <Link href="https://github.com/mARUwTC/maruresume" target="_blank"><i className="fab fa-github"></i></Link>
        </li>
        <div className={NavStyle.buttongroup}>
          <button onClick={ToCV}>Résumé</button>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
