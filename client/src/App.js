import "./App.css";
import CocktailList from "./pages/CocktailList";
import Community from "./pages/Community";
import Mypage from "./pages/Mypage";
import Mainpage from "./pages/Mainpage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/cocktaillist">
          <CocktailList />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
