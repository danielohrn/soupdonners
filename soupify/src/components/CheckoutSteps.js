import React, { Component } from "react";
import { Route } from "react-router-dom";

import PaymentForm from "./PaymentForm";
import DeliveryAddressForm from "./DeliveryAddressForm";

class CheckoutSteps extends Component {
  render() {
    return (
      <div>
        <Route
          path={"/cart/checkout/delivery"}
          component={DeliveryAddressForm}
        />
        <Route path={"/cart/checkout/payment"} component={PaymentForm} />
      </div>
    );
  }
}

export default CheckoutSteps;
