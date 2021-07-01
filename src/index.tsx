import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import GameModeContextProvider from "./context/gameMode-context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/tic-tac-toe">
      <GameModeContextProvider>
        <App />
      </GameModeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
