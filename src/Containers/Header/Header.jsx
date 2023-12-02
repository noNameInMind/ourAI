import React from "react";

import robohand from "../../assets/1.png";
import "./Header.css";
const Header = () => {
  return (
    <div id="home" className="app__header section__padding">
      <div className="app__header-text">
        <h1 className="p__robot">
          The future is here improve your self with chat gpt
        </h1>
        <p className="p__opensans">
          we built this site to help you access this technology
        </p>
        <button className="custom__button1">Use it today</button>
        <button className="custom__button2">Learn more</button>
      </div>

      <div className="app__header-img">
        <img src={robohand} alt="Robot hand" />
      </div>
    </div>
  );
};

export default Header;
