import React from "react";
import "./Style/Card.css";

const Cards = ({ item, handleitem }) => {
  const { title, author, price, img } = item;

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>

      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-author">{author}</p>
        <p className="card-price">Price - ₹ {price}</p>
        <button
          onClick={() => handleitem(item)}
          className="add-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
