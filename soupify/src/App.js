import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import ContextProvider from "./context/Provider";
import AppHeader from "./components/AppHeader";

import routes from "./routes";

class App extends Component {
  pageRoutes() {
    return routes.map(route => (
      <Route
        key={route.name}
        path={route.slug}
        exact={route.exact}
        component={route.component}
      />
    ));
  }

  render() {
    return (
      <div>
        <ContextProvider>
          <AppHeader />
          <div className="App">{this.pageRoutes()}</div>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
