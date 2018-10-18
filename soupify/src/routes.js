import React from "react";
import { Route } from "react-router-dom";

import ContextConsumer from "./context/Consumer";
import Product from "./components/Product";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";

import NoSoupForYou_404 from "./pages/404";

const routes = [
  {
    slug: "/",
    name: "Home",
    component: HomePage,
    exact: true
  },
  {
    slug: "/products",
    name: "Products",
    component: ProductsPage,
    exact: true
  },
  {
    slug: "/cart",
    name: "Cart",
    component: ShoppingCart,
    exact: false
  },
  {
    slug: "/login",
    name: "Login",
    component: () => <h1>Login</h1>,
    exact: false
  },
  {
    slug: "/register",
    name: "Register",
    component: RegisterPage,
    exact: false
  },
  {
    slug: "/profile",
    name: "Profile",
    component: ProfilePage,
    exact: false
  },
  {
    slug: "/checkout",
    name: "Checkout",
    component: CheckoutPage,
    exact: false
  },
  {
    slug: "/admin",
    name: "Admin",
    component: () => <h1>Admin</h1>,
    exact: false
  },

  {
    /** 404 not found */
    slug: null,
    name: null,
    component: NoSoupForYou_404,
    exact: null
  }
];

/** Routes for single product page (SOUPS AND SIDES) */
export function ProductRoutes(props) {
  return (
    <ContextConsumer>
      {({ products: { soups, sides }, addToCart }) =>
        soups
          .map(p => (
            <Route
              key={p.id}
              path={"/products/" + p.name.replace(/\s/gi, "-").toLowerCase()}
              exact={true}
              render={props => (
                <Product.Expanded
                  {...props}
                  product={p}
                  addToCart={addToCart}
                />
              )}
            />
          ))
          .concat(
            sides.map(side => (
              <Route
                key={side.id}
                path={
                  "/products/" + side.name.replace(/\s/gi, "-").toLowerCase()
                }
                exact={true}
                render={props => (
                  <Product.Expanded
                    {...props}
                    product={side}
                    addToCart={addToCart}
                  />
                )}
              />
            ))
          )
      }
    </ContextConsumer>
  );
}

export default routes;
