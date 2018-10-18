import React from "react";
import LocationIcon from "../assets/LocationIcon";
import Consumer from "../context/Consumer";

/**
    if NOT pickedAddress
      show form
    else if pickedAddress AND hasValidAddress
      show grattis vi levererar
    else if pickedAddress AND NOT hasValidAddress
      show tyvärr 
 */

const PostCodeForm = () => (
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
      if (!hasPickedDeliveryAddress) {
        return (
          <div style={{ margin: "1em 0" }}>
            <form
              onSubmit={onSubmitDeliveryAddress}
              style={{ position: "relative", maxWidth: 480 }}
            >
              <input
                id="deliveryAddress"
                className="input"
                type="number"
                placeholder="Ange postnummer"
                required
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
            <p style={{ fontWeight: "bold", color: "green", margin: "0 10px" }}>
              Vi leverar till {info.deliveryAddress}
            </p>
            <button onClick={resetDeliveryAddress}>Ändra adress</button>
          </div>
        );
      } else if (hasPickedDeliveryAddress && !hasValidDeliveryAddress) {
        return (
          <div style={{ display: "flex", margin: "10px 0" }}>
            <p style={{ fontWeight: "bold", color: "red", margin: "0 10px" }}>
              Vi leverar tyvärr inte till postnummer {info.deliveryAddress}
            </p>
            <button onClick={resetDeliveryAddress}>Ändra adress</button>
          </div>
        );
      }
    }}
  </Consumer>
);

export default PostCodeForm;
