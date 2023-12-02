import React from "react";

import "./section.css";

const Section = (props) => {
  return (
    <div className={`card ${props.style}`}>
      <div className={`card__img ${props.style}`}>
        <img src={props.img} alt="image" />
      </div>
      <div className="card__content">
        <h2 className="p__h2">{props.text}</h2>
        <button className="custom__button1">{props.button}</button>
      </div>
    </div>
  );
};

export default Section;
