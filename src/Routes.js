import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage/Home";
import HomeRucher from "./pages/rucherEcole/HomeRucher";
import HomeVie from "./pages/rucherVie/HomeVie";
import HomeNews from "./pages/news/HomeNews";
import HomeUtils from "./pages/utile/HomeUtils";
import HomeAnnonce from "./pages/annonce/HomeAnnonce";
import Post from "./components/post/PostPages";
import NotFound from "./screens/NotFound";
import API from "./services/PostAPI";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/la-vie-du-syndicat">
        <HomeVie />
      </Route>
      <Route exact path="/le-rucher-ecole">
        <HomeRucher />
      </Route>
      <Route exact path="/news">
        <HomeNews />
      </Route>
      <Route exact path="/utile">
        <HomeUtils />
      </Route>
      <Route exact path="/petites-annonce">
        <HomeAnnonce />
      </Route>
      <Route exact path="/post/:id">
        <Post api={API.fetchOnePost} />
      </Route>
      <Route exact path="/vie/post/:id">
        <Post api={API.fetchOnePostVie} />
      </Route>
      <Route exact path="/le-rucher-ecole/post/:id">
        <Post api={API.fetchOnePostRucher} />
      </Route>
      <Route exact path="/news/post/:id">
        <Post api={API.fetchOnePostNews} />
      </Route>
      <Route exact path="/utile/post/:id">
        <Post api={API.fetchOnePostUtils} />
      </Route>
      <Route exact path="/petites-annonce/post/:id">
        <Post api={API.fetchOnePostAnnonce} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
