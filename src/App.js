import React from "react";
import "./App.css";
import MenuAppBar from "./components/navbar/MenuAppBar";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./UI/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
