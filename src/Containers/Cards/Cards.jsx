import React from "react";
import Card from "../../Components/Card/Card";

import react from "../../assets/React-icon.png";
import GPT from "../../assets/gptwithbg.jpg";
import python from "../../assets/python.png";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="app__cards section__padding">
      <div className="app__cards-text">
        <h2 className="p__h2">This project was made using</h2>
      </div>
      <div className="app__cards-content">
        <Card
          img={react}
          text="This project was made using react wich is a javascript framework"
        />
        <Card
          img={python}
          text="Python was used to make our ai and train it based on an algorithem"
        />
        <Card
          img={GPT}
          text="We used open AI chat gpt API in this project to get a well trained AI"
        />
      </div>
    </div>
  );
};

export default Cards;
