/* tslint:disable */
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ScoreConsumer,
  ScoreProvider
} from "./Components/Context/ScoreContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ScoreProvider>
    <App />
  </ScoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
