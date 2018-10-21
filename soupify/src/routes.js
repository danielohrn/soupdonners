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
import SingleProduct from "./pages/SingleProduct";

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
    slug: "/products/:type/:productName",
    name: "Single Product",
    exact: false,
    component: SingleProduct
  },

  {
    /** 404 not found */
    slug: null,
    name: null,
    component: NoSoupForYou_404,
    exact: null
  }
];

export default routes;
