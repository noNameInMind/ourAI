import React from "react";

import OpenAI from "../../assets/openAI.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="app__logo section__padding">
      <div className="app__logo-img">
        <img src={OpenAI} alt="Open AI" />
      </div>
    </div>
  );
};

export default Logo;
