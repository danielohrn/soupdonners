import React from "react";
import { Link, Redirect } from "react-router-dom";
import Heading from "react-bulma-components/lib/components/heading";

import Consumer from "../context/Consumer";
import { PRIMARY_BUTTON } from "../constants";

export default () => {
  return (
    <Consumer>
      {({
        user: {
          hasPickedDeliveryAddress,
          hasValidDeliveryAddress,
          info: { deliveryAddress, firstName, lastName, phone },
          payment: { isDone, isActive }
        },
        onSubmitDeliveryAddress,
        resetDeliveryAddress
      }) => {
        return hasPickedDeliveryAddress && !hasValidDeliveryAddress ? (
          /* IF USER HAS PICKED ADDRESS AND IT IS INVALID */
          <div style={{ display: "flex", margin: "10px 0" }}>
            <p style={{ fontWeight: "bold", color: "red", marginRight: 10 }}>
              Vi leverar tyvärr inte till postnummer {deliveryAddress}
            </p>
            <button
              className="button is-small"
              style={PRIMARY_BUTTON}
              onClick={resetDeliveryAddress}
            >
              Ändra adress
            </button>
          </div>
        ) : (
          /* IF USER HAS NOT PICKED ADDRESS */
          <form
            onSubmit={onSubmitDeliveryAddress}
            style={{ animation: "swoosh-in-from-right .4s forwards linear" }}
          >
            <Heading size={4}>Leveransadress</Heading>
            <div className="field is-grouped">
              <input
                required
                id="firstName"
                type="text"
                placeholder="Förnamn"
                className="input"
              />
              <input
                required
                id="lastName"
                type="text"
                placeholder="Efternamn"
                className="input"
              />
            </div>
            <input
              required
              id="streetAddress"
              style={{ marginBottom: 10 }}
              type="text"
              defaultValue={
                deliveryAddress && hasValidDeliveryAddress
                  ? deliveryAddress
                  : null
              }
              placeholder="Gatuadress"
              className="input"
            />
            <input
              required
              id="postCode"
              style={{ marginBottom: 10 }}
              type="text"
              defaultValue={
                deliveryAddress && hasValidDeliveryAddress
                  ? deliveryAddress
                  : null
              }
              placeholder="Postnummer"
              className="input"
            />
            <input
              required
              id="area"
              style={{ marginBottom: 10 }}
              type="text"
              defaultValue={
                deliveryAddress && hasValidDeliveryAddress
                  ? deliveryAddress
                  : null
              }
              placeholder="Ort"
              className="input"
            />
            <input
              required
              id="phone"
              style={{ marginBottom: 10 }}
              type="phone"
              placeholder="Telefonnummer för avisering vid leverans"
              className="input"
            />
            {!hasValidDeliveryAddress || !firstName ? (
              <button style={PRIMARY_BUTTON} className="button">
                Gå vidare till betalning
              </button>
            ) : (
              <Redirect to={"/cart/checkout/payment"} />
            )}
          </form>
        );
      }}
    </Consumer>
  );
};
