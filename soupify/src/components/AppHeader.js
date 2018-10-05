import React from "react";
import { Link } from "react-router-dom";
import PostCodeForm from "./PostCodeForm";
import ShoppingCartIcon from "./CartIcon";
import ContextConsumer from "../context/Consumer";

const AppHeader = () => (
  <header
    style={{
      display: "flex",
      flexDirection: "column",
      padding: "20px 0"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Link to={"/"}>Soppogram</Link>

      <nav style={{ display: "flex" }}>
        <button style={{ margin: ".5px 10px" }}>Logga in</button>
        <ContextConsumer>
          {({ shoppingCart: { items } }) => (
            <ShoppingCartIcon amount={items.length} />
          )}
        </ContextConsumer>
      </nav>
    </div>
    <PostCodeForm />
  </header>
);

export default AppHeader;
