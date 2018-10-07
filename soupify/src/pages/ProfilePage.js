import React from "react";
import { Redirect } from "react-router-dom";
import ContextConsumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <ContextConsumer>
        {({
          user: {
            isSignedIn,
            info: { name, email }
          },
          logOut
        }) => (
          <div>
            {isSignedIn ? (
              <React.Fragment>
                Välkommen {name} <button onClick={logOut}>Logga ut</button>
              </React.Fragment>
            ) : (
              // if not sigened in redirect to register page
              <Redirect to={"/register"} />
            )}
          </div>
        )}
      </ContextConsumer>
    </div>
  );
};
