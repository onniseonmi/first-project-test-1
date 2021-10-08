import React from "react";

const Ingredient = ({ ingredient }) => {
  return (
    <div id="ingredient-box">
      <li>{ingredient.name}</li>
    </div>
  );
};

export default Ingredient;
