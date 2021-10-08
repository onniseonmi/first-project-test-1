import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailListEntry from "../components/cocktail/CocktailListEntry";
const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const getCocktails = () => {
    axios
      .get("http://localhost:8000/cocktails")
      .then((res) => setCocktails(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCocktails();
  }, []);
  return (
    <div id="cocktail-list">
      <div id="cocktail-list-test">test area</div>
      <div>
        <div id="cocktail-list-title" className="title">
          Cocktail List
        </div>
        {cocktails.length === 0 ? (
          <div>nothing</div>
        ) : (
          <div id="cocktail-img-container">
            {cocktails.map((el, idx) => (
              <CocktailListEntry key={idx} cocktail={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailList;
