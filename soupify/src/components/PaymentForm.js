import React from "react";
import { Redirect } from "react-router-dom";
import Heading from "react-bulma-components/lib/components/heading";

import Consumer from "../context/Consumer";
import { checkoutFormScrollAndFocusHandler } from "../libs/utils";
import { PRIMARY_BUTTON } from "../constants";

export default () => (
  <Consumer>
    {({ user: { payment }, onPay }) => {
      return !payment.isDone ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            onPay();
          }}
          style={{ animation: "swoosh-in-from-right .4s forwards linear" }}
        >
          <Heading size={4}>Betalningsuppgifter</Heading>
          <input
            onFocus={checkoutFormScrollAndFocusHandler}
            id="payment"
            style={{ marginBottom: 10 }}
            type="text"
            placeholder="Kortnummer"
            className="input"
            autoComplete="off"
          />
          <div className="field is-grouped">
            <input
              style={{ marginBottom: 10 }}
              type="text"
              placeholder="CVC"
              className="input"
            />
            <input
              style={{ marginBottom: 10 }}
              type="text"
              placeholder="Expiry"
              className="input"
            />
          </div>
          <button
            to={"/order-details"}
            className={`button ${
              payment.isActive && !payment.isDone ? "is-loading" : null
            }`}
            type="submit"
            style={PRIMARY_BUTTON}
          >
            Betala
          </button>
        </form>
      ) : (
        <Redirect to={"/order-details"} />
      );
    }}
  </Consumer>
);
