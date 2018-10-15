import React from "react";
import { Route } from "react-router-dom";

import ProductSummary from "./components/ProductSummary";
import ContextConsumer from "./context/Consumer";
import Product from "./components/Product";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";

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
    exact: false
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
  }
];

/** Routes for single product page */
export function ProductRoutes(props) {
  return (
    <ContextConsumer>
      {({ products, addToCart }) =>
        products.map(p => (
          <Route
            key={p.id}
            path={"/products" + "/" + p.name.replace(/\s/gi, "-").toLowerCase()}
            render={props => (
              <Product.Expanded {...props} product={p} addToCart={addToCart} />
            )}
          />
        ))
      }
    </ContextConsumer>
  );
}

export default routes;
