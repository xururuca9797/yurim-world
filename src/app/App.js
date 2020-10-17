import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Gnb, Main, Sub } from "../pages/Index";
// import mainImg from "./main.jpg";

function App() {
  return (
    <div>
      <Gnb />
      <Route exact path="/" component={Main} />
      <Route exact path="/sub" component={Sub} />
    </div>
  );
}

export default App;
