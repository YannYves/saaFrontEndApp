import React from "react";
import "./App.css";
import MenuAppBar from "./pages/homepage/MenuAppBar";
import Routes from "./Routes";
import Copyright from "./components/copyright/Copyright";

function App() {
  return (
    <div>
      <MenuAppBar />
      <Routes />
      <Copyright />
    </div>
  );
}

export default App;
