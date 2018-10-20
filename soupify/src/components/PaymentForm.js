import React from "react";
import Heading from "react-bulma-components/lib/components/heading";
import { checkoutFormScrollAndFocusHandler } from "../libs/utils";
import PaymentForm from "./PostCodeForm";

export default ({ deliveryAddress }) => (
  <React.Fragment>
    <Heading size={4}>Kortuppgifter</Heading>
    {/* <input
      className="input is-success"
      type="text"
      placeholder={"Leveransadress"}
      disabled
      value={"Levererar till postnummer: " + deliveryAddress}
      style={{ marginBottom: 10 }}
    /> */}
    <PaymentForm />
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
    <button className="button" onClick={e => e.preventDefault()} type="submit">
      Betala
    </button>
  </React.Fragment>
);
