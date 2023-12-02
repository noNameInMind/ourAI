import React from "react";
import Section from "../../Components/Section/Section";

import GPT from "../../assets/ChatGPT-Logo2.svg";
import Brain from "../../assets/networkbrain-white.svg";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div id="about" className="app__aboutus section__padding">
      <Section
        img={GPT}
        text="we used chatgpt 3 in our project to give you the best preformance as we think it’s the best out there right now"
        button="Try chatGpt-3"
      />
      <Section
        style="revers"
        img={Brain}
        text="We also have our custom Ai that we have developed if you are interested as well"
        button="Try Our AI"
      />
    </div>
  );
};

export default AboutUs;
