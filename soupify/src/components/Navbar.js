import React from "react";
import { Link } from "react-router-dom";
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
      zIndex: 1,
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
    {/* ---Hack to get `justifyContent: space-between` working --- */}
    <div style={{ visibility: "hidden" }}>x</div>
  </header>
);

export default Navbar;
