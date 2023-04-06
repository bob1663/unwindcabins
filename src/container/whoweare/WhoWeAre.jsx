import React from "react";
import "./WhoWeAre.css";
import { images } from "../../constants";

const WhoWeAre = () => {
  return (
    <div className="app__whoweare">
      <div className="app__whoweare-container">
        <div className="app__whoweare-text">
          <h2>Get ready to unwind</h2>
          <span></span>
          <p>
            A cabin getaway can be a wonderful way to relax and reconnect with
            nature. Many cabin rentals are located in beautiful, secluded areas,
            surrounded by trees and other natural beauty.
            <br />
            <br /> A cabin getaway can be a wonderful way to escape the hustle
            and bustle of daily life and reconnect with nature.
          </p>
          <button>
            Learn more <img src={images.ArrowRight} alt="ArrowRight" />
          </button>
        </div>
        <div className="app__whoweare-video">
          <img src={images.VideoCard} alt="VideoCard" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
