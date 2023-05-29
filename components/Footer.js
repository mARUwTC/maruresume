import React from "react";

import Link from "next/link";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Call</h2>
          <p>+21655555555</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>contact@medhat.net</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Thanks for your time! :)</p>
        <ul>
        <li>
          <Link href="https://github.com/mARUwTC"><i className="fab fa-github"></i></Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/chriswongtc"><i className="fab fa-linkedin"></i></Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
