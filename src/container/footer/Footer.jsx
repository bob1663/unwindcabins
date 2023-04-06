import React from "react";
import BottomFooter from "./BottomFooter/BottomFooter";
import "./Footer.css";
import TopFooter from "./TopFooter/TopFooter";

const Footer = () => {
  return (
    <div className="app__footer">
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
