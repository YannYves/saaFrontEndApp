import React from "react";
import "./App.css";
import ActionComponent from "./components/ActionComponent";
import OutputComponent from "./components/OutputComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OutputComponent />
        <ActionComponent />
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/dinosoftlabs"
            title="DinosoftLabs"
          >
            DinosoftLabs
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
