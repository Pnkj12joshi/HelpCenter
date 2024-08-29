import React from 'react';
import CardItem from './CardItem';
import "../App.css";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <CardItem key={card._id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
