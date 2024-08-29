import React from 'react';
import "../App.css";

const CardItem = ({ card }) => {
  return (
    <div className="card-item">
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
};

export default CardItem;
