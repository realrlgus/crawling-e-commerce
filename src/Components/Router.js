import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "routes/items";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Items} />
    </Switch>
  </Router>
);
