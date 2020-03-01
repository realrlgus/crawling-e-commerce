import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home/index";
import Detail from "../Routes/Details/index";
import Search from "../Routes/Search/index";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/items/:id" exact component={Detail} />
      </Switch>
    </>
  </Router>
);
