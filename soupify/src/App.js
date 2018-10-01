import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  pageRoutes = () => {
    return routes.map(route => {
      return (
        <Route
          path={route.slug}
          component={route.component}
          exact={route.exact}
        />
      );
    });
  };

  render() {
    return (
      <div className="App">
        <img
          style={{ background: "white" }}
          src="https://www.svgrepo.com/show/37087/bowl-of-soup.svg"
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">SOUP DONNERS!!</h1>
        {this.pageRoutes()}
      </div>
    );
  }
}

export default App;
