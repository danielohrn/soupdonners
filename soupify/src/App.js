import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import ContextProvider from "./context/Provider";
import Navbar from "./components/Navbar";
import ShoppingCartIcon from "./components/CartIcon";

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
        <ShoppingCartIcon />
        <div className="App">
          <Switch>{this.pageRoutes()}</Switch>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
