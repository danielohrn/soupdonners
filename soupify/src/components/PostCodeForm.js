import React from "react";
import { withRouter } from "react-router-dom";
import LocationIcon from "../assets/LocationIcon";
import Consumer from "../context/Consumer";
import { checkoutFormScrollAndFocusHandler } from "../libs/utils";
/**
    if NOT pickedAddress
      show form
    else if pickedAddress AND hasValidAddress
      show grattis vi levererar
    else if pickedAddress AND NOT hasValidAddress
      show tyvärr 
 */

const PostCodeForm = ({ style, match }) => (
  <Consumer>
    {({
      onSubmitDeliveryAddress,
      resetDeliveryAddress,
      user: {
        hasPickedDeliveryAddress,
        hasValidDeliveryAddress,
        isFirstVisitOnHomePage,
        info
      }
    }) => {
      const IS_ON_HOME_PAGE = match.path === "/";
      if (!hasPickedDeliveryAddress) {
        return (
          <div style={{ margin: "1em 0" }}>
            <form
              onSubmit={onSubmitDeliveryAddress}
              style={{ ...style, position: "relative" }}
            >
              <input
                autoComplete="off"
                id="postCode"
                className="input"
                type="number"
                placeholder="Ange postnummer"
                required
                onFocus={
                  IS_ON_HOME_PAGE ? null : checkoutFormScrollAndFocusHandler
                }
              />
              <button
                type="submit"
                className="button"
                style={{ position: "absolute", right: "0" }}
              >
                <LocationIcon />
              </button>
            </form>
          </div>
        );
      } else if (hasPickedDeliveryAddress && hasValidDeliveryAddress) {
        return (
          <div style={{ display: "flex", margin: "10px 0" }}>
            <p style={{ fontWeight: "bold", color: "green", marginRight: 10 }}>
              Vi leverar till {info.deliveryAddress}
            </p>
            <button className="button is-small" onClick={resetDeliveryAddress}>
              Ändra adress
            </button>
          </div>
        );
      } else if (hasPickedDeliveryAddress && !hasValidDeliveryAddress) {
        return (
          <div style={{ display: "flex", margin: "10px 0" }}>
            <p style={{ fontWeight: "bold", color: "red", marginRight: 10 }}>
              Vi leverar tyvärr inte till postnummer {info.deliveryAddress}
            </p>
            <button className="button is-small" onClick={resetDeliveryAddress}>
              Ändra adress
            </button>
          </div>
        );
      }
    }}
  </Consumer>
);

export default withRouter(PostCodeForm);
