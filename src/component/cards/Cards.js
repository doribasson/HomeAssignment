import React from "react";
import "./cards.css";
import Card from "../card/Card";

const Cards = ({ cards, isHome }) => {
  return (
    <div className="cards">
      {cards &&
        cards.map((card, i) => <Card card={card} isHome={isHome} key={i} />)}
    </div>
  );
};

export default Cards;
