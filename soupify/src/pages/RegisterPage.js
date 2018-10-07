import React from "react";
import { Redirect } from "react-router-dom";
import ContextConsumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <ContextConsumer>
        {({ register, user: { isSignedIn } }) =>
          isSignedIn ? (
            <Redirect to={"/profile"} />
          ) : (
            <form onSubmit={register}>
              <input id="email" type="email" required placeholder="Email" />
              <input id="password" required placeholder="Lösenord" />
              <button type="submit">Registrera</button>
            </form>
          )
        }
      </ContextConsumer>
    </div>
  );
};
