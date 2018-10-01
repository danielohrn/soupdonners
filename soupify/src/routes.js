import React from "react";

const routes = [
  {
    slug: "/",
    name: "Home",
    component: () => <h1>Home</h1>,
    exact: true
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
