import React from "react";
import "./SubHeading.css";

const SubHeading = ({ title, text, link }) => {
  return (
    <div className="app__subheading">
      <div className="app__subheading-title">
        <h2>{title}</h2>
        <span></span>
      </div>
      <div className="app__subheading-text">
        <p>{text}</p>
        <p>{link}</p>
      </div>
    </div>
  );
};

export default SubHeading;
