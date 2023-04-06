import React from "react";
import "./Card.css";

const Card = ({
  data: { imgUrl, location, title, price, description, ratingImage },
}) => {
  return (
    <div className="app__card">
      <div className="app__card-image">
        <img src={imgUrl} alt="cabinImage" />
      </div>
      <div className="app__card-content">
        <p>{location}</p>
        <div className="app__card-content_price">
          <h3>{title}</h3>
          <h3>{price}</h3>
        </div>
        <p>{description}</p>
        <img src={ratingImage} alt="ratingImage" />
      </div>
    </div>
  );
};

export default Card;
