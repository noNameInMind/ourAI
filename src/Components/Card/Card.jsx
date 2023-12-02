import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="collection">
      <div className="collection__img">
        <img src={props.img} alt="programing language" />
      </div>
      <div className="collection__content">
        <p className="p__opensans">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
