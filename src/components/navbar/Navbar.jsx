import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <h1>unwind</h1>
          <h1>cabins</h1>
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="#cabins">Our cabins</a>
          </li>
          <li>
            <a href="#inspired">Get inspired</a>
          </li>
          <li>
            <a href="#gift">Gift a stay</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <div className="profile-circle">
              <img src={images.iconProfile} alt="iconProfile" />
            </div>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          <RiMenu3Line
            style={{ cursor: "pointer" }}
            color="#000000"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <RiCloseLine
                className="overlay__close"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#cabins">Our cabins</a>
                </li>
                <li>
                  <a href="#inspired">Get inspired</a>
                </li>
                <li>
                  <a href="#gift">Gift a stay</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
