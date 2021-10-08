import React from "react";

const PopularEntry = ({ cocktail }) => {
  return (
    <div id="popular-box">
      <div id="popular-img">
        <img src={cocktail.image} alt={cocktail.name}></img>
      </div>
      <div id="popular-name">{cocktail.name}</div>
    </div>
  );
};

export default PopularEntry;
