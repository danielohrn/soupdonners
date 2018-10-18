import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./CartIcon";
import ContextConsumer from "../context/Consumer";
import { PRIMARY_GREEN } from "../constants";
import { LOGOTYPE } from "../libs/images";
import HambugerMenyIcon from "../assets/HamburgerMenyIcon";

const Navbar = () => (
  <header
    style={{
      display: "flex",
      flexDirection: "row",
      padding: "5px 25px",
      background: PRIMARY_GREEN,
      color: "white",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 2,
      position: "fixed",
      top: 0,
      width: "100%"
    }}
  >
    <HambugerMenyIcon />

    <Link
      style={{
        color: "inherit",
        display: "flex",
        justifyContent: "center",
        width: 40,
        height: 40
      }}
      to={"/"}
    >
      <img
        src={LOGOTYPE}
        alt={"logotype"}
        style={{ width: 40, height: "100%" }}
      />
    </Link>
    <div style={{ visibility: "hidden" }}>x</div>
    <ContextConsumer>
      {({ shoppingCart: { items }, user: { isSignedIn, info } }) => (
        <ShoppingCartIcon amount={items.length} />
      )}
    </ContextConsumer>
  </header>
);

export default Navbar;
