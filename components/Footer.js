import React from "react";

import Link from "next/link";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        {/* <div className="firsttext">
          <h2>Call</h2>
          <p>+852 59432006</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>chriswong0621@gmail.com</p>
        </div> */}
        <div className="firsttext">
          <h2>Contact</h2>
          <p>Please feel free to contact me through Whatsapp/Linkedin!</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Thanks for your time! :)</p>
        <ul>
        <li>
          <Link href="https://wa.me/85259432006" target="_blank"><i className="fab fa-whatsapp"></i></Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/chriswongtc" target="_blank"><i className="fab fa-linkedin"></i></Link>
        </li>
        <li>
          <Link href="https://github.com/mARUwTC" target="_blank"><i className="fab fa-github"></i></Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
