import React from "react";
import "./Cabin.css";
import { Card, SearchBar, SubHeading } from "../../components";
import { data } from "../../constants";

const Cabin = () => {
  return (
    <div className="app__cabin">
      <div className="app__cabin-container">
        <div className="app__cabin-searchbar">
          <SearchBar />
        </div>
        <SubHeading
          title="Discover our idyllic countryside cabins"
          text="Fully equipped kitchen and bathroom with plenty of walking and cycling routes to explore."
          link="View all cabins"
        />
        <div className="app__cabin-cards">
          {data.cabins.map((cabins) => (
            <Card data={cabins} key={cabins.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cabin;
