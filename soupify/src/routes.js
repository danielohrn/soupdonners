import React from "react";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart";

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
    slug: "/profile",
    name: "Profile",
    component: () => <h1>Profile</h1>,
    exact: false
  },
  {
    slug: "/checkout",
    name: "Checkout",
    component: () => <h1>Checkout</h1>,
    exact: false
  },
  {
    slug: "/admin",
    name: "Admin",
    component: () => <h1>Admin</h1>,
    exact: false
  }
];

export default routes;
