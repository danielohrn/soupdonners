import React from "react";
import ContextConsumer from "../context/Consumer";
import { Link } from "react-router-dom";
import { PRIMARY_GREEN } from "../constants";

export default () => (
  <ContextConsumer>
    {({ isNavBarOpen }) => {
      return isNavBarOpen ? (
        <nav style={styles.nav}>
          <Link style={styles.link} to={"/"}>
            Hem
          </Link>
          <Link style={styles.link} to={"/products"}>
            Meny
          </Link>
        </nav>
      ) : null;
    }}
  </ContextConsumer>
);

const styles = {
  link: {
    margin: "0 10px"
  },
  nav: {
    position: "fixed",
    width: "100%",
    top: 50,
    left: 0,
    background: PRIMARY_GREEN,
    animation: "swoosh-in-from-top .1s forwards linear"
  }
};
