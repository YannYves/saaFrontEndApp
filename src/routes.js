import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage/Home";
import HomeRucher from "./pages/rucherEcole/HomeRucher";
import NotFound from "./pages/screens/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/la-vie-du-syndicat">
        <Home />
      </Route>
      <Route exact path="/le-rucher-école">
        <HomeRucher />
      </Route>
      <Route exact path="/actualités">
        <Home />
      </Route>
      <Route exact path="/utile">
        <Home />
      </Route>
      <Route exact path="/petites-annonces">
        <Home />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
