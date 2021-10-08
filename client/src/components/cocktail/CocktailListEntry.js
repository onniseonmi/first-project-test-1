import React from "react";

const CocktailListEntry = ({ cocktail }) => {
  return (
    <div id="cocktail-img-box">
      <img id="cocktail-img" src={cocktail.image} alt={cocktail.name} />
    </div>
  );
};

export default CocktailListEntry;
