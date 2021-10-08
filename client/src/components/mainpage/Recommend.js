import React from "react";
import Recipe from "../cocktail/Recipe";
import Ingredient from "../cocktail/Ingredient";
const Recommend = ({ recommendCocktail }) => {
  const { recipes, ingredients } = recommendCocktail;
  return (
    <div id="recommend-container">
      <div id="recommend-title" className="title">
        Today's recommend
      </div>
      <div id="recommend-body">
        <div id="recommend-img">
          <img src={recommendCocktail.image} alt={recommendCocktail.name}></img>
          <div id="recommend-name">{recommendCocktail.name}</div>
        </div>
        <div id="recommend-body-right">
          <div id="recommend-ingredient">
            <div id="ingredient-title" className="small-title">
              Ingredients
            </div>
            {!ingredients ? (
              <div>Ingredients가 없습니다.</div>
            ) : (
              <div>
                {ingredients.map((el, idx) => (
                  <Ingredient key={idx} ingredient={el} />
                ))}
              </div>
            )}
          </div>
          <div id="recommend-recipe">
            <div id="recipe-title" className="small-title">
              Recipe
            </div>
            {!recipes ? (
              <div>Recipe가 없습니다.</div>
            ) : (
              <div>
                {recipes.map((el, idx) => (
                  <Recipe key={idx} recipe={el} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
