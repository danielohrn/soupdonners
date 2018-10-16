import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./CartIcon";
import ContextConsumer from "../context/Consumer";
import ProfileIcon from "../assets/ProfileIcon";
import { PRIMARY_GREEN } from "../constants";

const Navbar = () => (
  <header
    style={{
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      background: PRIMARY_GREEN,
      color: "white"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Link style={{ color: "inherit" }} to={"/"}>
        Soppogram
      </Link>

      <ContextConsumer>
        {({ shoppingCart: { items }, user: { isSignedIn, info } }) => (
          <nav style={{ display: "flex", paddingRight: 55 }}>
            {/* <Link
              to={isSignedIn ? "/profile" : "/register"}
              style={{ margin: ".5px 10px" }}
            >
              {isSignedIn ? (
                <React.Fragment>
                  {info.name}
                  <ProfileIcon />
                </React.Fragment>
              ) : (
                "Logga in"
              )}
            </Link> */}
            <ShoppingCartIcon amount={items.length} />
          </nav>
        )}
      </ContextConsumer>
    </div>
  </header>
);

export default Navbar;
