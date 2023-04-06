import React from "react";
import "./Hero.css";
import { images } from "../../constants";

const Hero = () => {
  return (
    <div className="app__hero">
      <div className="app__hero-container">
        <h1>
          Leave the office behind and <span>unwind</span>
        </h1>
        <p>
          Welcome to our cozy cabin nestled in the heart of the mountains! Our
          cabin is the perfect getaway for those seeking peace and relaxation in
          a natural setting.
        </p>
        <div className="app__hero-rating">
          <img src={images.ratingPhoto} alt="ratingPhoto" />
          <img src={images.trustPilotRating} alt="trustPilotRating" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
