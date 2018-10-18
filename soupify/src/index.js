import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ScrollTop from "./components/ScrollTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ScrollTop>
      <App />
    </ScrollTop>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
