import React, { useState, useEffect } from "react";
import Popular from "../components/mainpage/Popular";
import Recommend from "../components/mainpage/Recommend";
import axios from "axios";
const Mainpage = () => {
  const [recommend, setRecommend] = useState([]);
  const [popular, setPopular] = useState([]);

  const getRecommend = () => {
    axios
      .get("http://localhost:8000/cocktails/recommendation")
      .then((res) => setRecommend(res.data));
  };
  const getPopular = () => {
    axios
      .get("http://localhost:8000/cocktails/mostpopular")
      .then((res) => setPopular(res.data));
  };
  useEffect(() => {
    getRecommend();
    getPopular();
  }, []);

  return (
    <div id="mainpage-container">
      <Recommend recommendCocktail={recommend} />
      <Popular popularCocktails={popular} />
    </div>
  );
};

export default Mainpage;
