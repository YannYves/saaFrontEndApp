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
        {/* refacto this , link props useless .Can access the url from react-router hooks*/}
        <Post link="/" api={API.fetchOnePost} />
      </Route>
      <Route exact path="/la-vie-du-syndicat/post/:id">
        <Post link="/la-vie-du-syndicat" api={API.fetchOnePostVie} />
      </Route>
      <Route exact path="/le-rucher-ecole/post/:id">
        <Post link="/le-rucher-ecole" api={API.fetchOnePostRucher} />
      </Route>
      <Route exact path="/news/post/:id">
        <Post link="/news" api={API.fetchOnePostNews} />
      </Route>
      <Route exact path="/utile/post/:id">
        <Post link="/utile" api={API.fetchOnePostUtils} />
      </Route>
      <Route exact path="/petites-annonce/post/:id">
        <Post link="/petites-annonce" api={API.fetchOnePostAnnonce} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
