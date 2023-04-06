import React from "react";
import "./SearchBar.css";
import { images } from "../../constants";

const SearchBar = () => {
  return (
    <div className="app__searchbar">
      <button>
        <img
          src={images.MapIcon}
          alt="MapIcon"
          style={{ marginRight: "16px" }}
        />
        <p>I want to go</p>
      </button>
      <button>
        <img
          src={images.CalendarIcon}
          alt="CalendarIcon"
          style={{ marginRight: "8px" }}
        />
        <p>Check in</p>
      </button>
      <button>
        <img
          src={images.CalendarIcon}
          alt="CalendarIcon"
          style={{ marginRight: "8px" }}
        />
        <p>Check out</p>
      </button>
      <button>
        <img
          src={images.PeopleIcon}
          alt="MapIcon"
          style={{ marginRight: "8px" }}
        />
        <p>Travellers</p>
      </button>
      <button>
        <p style={{ color: "#FFFFFF" }}>Find avilable cabins</p>
      </button>
    </div>
  );
};

export default SearchBar;
