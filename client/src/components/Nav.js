import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-container">
      <div id="nav-top">
        <Link to="/">
          <span id="nav-title" className="title">
            Cocktailist
          </span>
        </Link>
        <div id="nav-right">
          <div id="nav-search">
            <img
              id="nav-right-search-img"
              src="../images/others_img/search.png"
            ></img>
            <span id="nav-search-font">search</span>
          </div>
          <div id="nav-menu">
            <img
              id="nav-right-menu-img"
              src="../images/others_img/menu.png"
            ></img>
            <span id="nav-menu-font">menu</span>
          </div>
        </div>
      </div>
      <div id="nav-menu-modal">
        <div id="nav-menu-login">login</div>
        <div id="nav-menu-loout">logout</div>
        <Link to="/mypage">
          <div id="nav-menu-mypage">mypage</div>
        </Link>
      </div>
      <div id="nav-middle">
        <Link to="/cocktaillist">Cocktail List</Link>
        <Link to="/community">Community</Link>
      </div>
    </div>
  );
};

export default Nav;
