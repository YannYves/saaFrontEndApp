import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage/Home";
import HomeRucher from "./pages/rucherEcole/HomeRucher";
import HomeVie from "./pages/rucherVie/HomeVie";
import HomeNews from "./pages/news/HomeNews";
import HomeUtils from "./pages/utile/HomeUtils";
import HomeAnnonce from "./pages/annonce/HomeAnnonce";
import NotFound from "./pages/screens/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/la-vie-du-syndicat">
        <HomeVie />
      </Route>
      <Route exact path="/le-rucher-école">
        <HomeRucher />
      </Route>
      <Route exact path="/news">
        <HomeNews />
      </Route>
      <Route exact path="/utile">
        <HomeUtils />
      </Route>
      <Route exact path="/petites-annonces">
        <HomeAnnonce />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
