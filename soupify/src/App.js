import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { ProductRoutes } from "./routes";
import PostCodeForm from "./components/PostCodeForm";
import ContextProvider from "./context/Provider";
import Navbar from "./components/Navbar";

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
      <ContextProvider>
        <Navbar />
        <div /*className="App"*/>
          <ProductRoutes />
          <Switch>{this.pageRoutes()}</Switch>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
