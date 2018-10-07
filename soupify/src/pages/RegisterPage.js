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
            <RegisterForm register={register} />
          )
        }
      </ContextConsumer>
    </div>
  );
};

const RegisterForm = ({ register }) => (
  <form onSubmit={register}>
    <input id="email" type="email" required placeholder="Email" />
    <input id="password" type="password" required placeholder="Lösenord" />
    <button type="submit">Registrera</button>
  </form>
);
