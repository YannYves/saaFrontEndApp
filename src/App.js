import React from "react";
import "./App.css";
import MenuAppBar from "./pages/homepage/MenuAppBar";
import iconCopyRight from "./components/copyright/iconCopyRight";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Routes />
      <iconCopyRight />
    </div>
  );
}

export default App;
