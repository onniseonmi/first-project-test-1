import React from "react";
import PopularEntry from "./PopularEntry";
const Popular = ({ popularCocktails }) => {
  return (
    <div id="popular">
      <div id="popular-title" className="title">
        Popular cocktails
      </div>
      <div id="popular-container">
        {!popularCocktails ? (
          <div>no</div>
        ) : (
          <div id="popular-container">
            {popularCocktails.map((el, idx) => (
              <PopularEntry key={idx} cocktail={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popular;
