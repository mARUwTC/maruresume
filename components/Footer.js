import React from "react";
import Link from "next/link";
import Image from "next/image";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Contact</h2>
          <p>Feel free to contact me through Email/LinkedIn!</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Thanks for your time! :)</p>
        <Image
          src="/thankyou.webp"
          width={100}
          height={100}
        >
        </Image>
        <ul>
          <li>
            <Link href="mailto:chriswong.621@outlook.com"><i className="fa fa-envelope"></i></Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/chriswongtc" target="_blank"><i className="fab fa-linkedin"></i></Link>
          </li>
          <li>
            <Link href="https://github.com/mARUwTC/maruresume" target="_blank"><i className="fab fa-github"></i></Link>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Footer;
