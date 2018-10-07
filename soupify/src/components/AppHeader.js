import React from "react";
import { Link } from "react-router-dom";
import PostCodeForm from "./PostCodeForm";
import ShoppingCartIcon from "./CartIcon";
import ContextConsumer from "../context/Consumer";
import ProfileIcon from "../assets/ProfileIcon";

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

      <ContextConsumer>
        {({ shoppingCart: { items }, user: { isSignedIn, info } }) => (
          <nav style={{ display: "flex" }}>
            <Link
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
            </Link>
            <ShoppingCartIcon amount={items.length} />
          </nav>
        )}
      </ContextConsumer>
    </div>
    <PostCodeForm />
  </header>
);

export default AppHeader;
