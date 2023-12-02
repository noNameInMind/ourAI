import React from "react";
import Email from "../../Components/Email/Email";

import logo from "../../assets/networkbrain-white.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__footer-content">
        <div className="app__footer-content_headtext">
          <p className="p__opensans">This site was made by :</p>
        </div>
        <div className="app__footer-content_subtext">
          <p className="p__opensans">Mousab Basil</p>
          <p className="p__opensans">Ali Saad</p>
          <p className="p__opensans">Adean Mnaor</p>
        </div>
      </div>
      <div className="app__footer-email">
        <Email />
      </div>
    </div>
  );
};

export default Footer;
