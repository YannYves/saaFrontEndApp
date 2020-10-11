import React from "react";
import "./App.css";
import MenuAppBar from "./components/navbar/MenuAppBar";
import Footer from "./components/footer/Footer";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./UI/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Routes />
      <Footer
        title="Made with <3 by Yann Dubois"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
