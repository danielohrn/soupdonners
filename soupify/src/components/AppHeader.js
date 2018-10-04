import React from "react";
import { Link } from "react-router-dom";
import PostCodeForm from "./PostCodeForm";
import CartIcon from "../assets/CartIcon";

const AppHeader = () => (
  <header>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={"/"}>Soppogram</Link>
      <nav style={{ display: "flex" }}>
        <button>Logga in</button>
        <CartIcon />
      </nav>
    </div>
    <PostCodeForm />
  </header>
);

export default AppHeader;
