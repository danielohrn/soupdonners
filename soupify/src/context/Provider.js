import React, { Component, createContext } from "react";
import STATE from "./state";

const isValidStockholmPostCode = input => {
  const LOW = 10012;
  const HIGH = 19587;
  try {
    return parseInt(input) >= LOW && parseInt(input) <= HIGH;
  } catch (err) {
    return false;
  }
};

export const AppContext = createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = STATE;
  }

  register = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const user = {
      ...this.state.user,
      isSignedIn: true,
      info: { email, name: email }
    };

    this.setState({ user });
  };

  removeAllProductTypesFromCart = id => {
    const shoppingCart = { ...this.state.shoppingCart };
    shoppingCart.items = shoppingCart.items.filter(
      product => product.id !== id
    );

    this.setState({ shoppingCart }, this.updateOrderSummary);
  };

  logOut = () => {
    this.setState({
      user: { isSignedIn: false, info: { name: null, email: null } }
    });
  };

  addToCart = (id, PRODUCT_TYPE = "soups") => {
    const shoppingCart = { ...this.state.shoppingCart };
    // find product that matches with provided id and product type
    const productToAdd = this.state.products[PRODUCT_TYPE].filter(
      product => product.id === id
    )[0];

    // if product found add it to cart and update ordersummary
    if (productToAdd) {
      shoppingCart.items.push(productToAdd);
      this.setState({ shoppingCart }, this.updateOrderSummary);
      // this.showNotification();
    }
  };

  removeFromCart = id => {
    const shoppingCart = { ...this.state.shoppingCart };
    // find product with matching id and remove it
    for (let i = 0; i < shoppingCart.items.length; ++i) {
      if (shoppingCart.items[i].id === id) {
        shoppingCart.items.splice(i, 1);
        break;
      }
    }
    this.setState({ shoppingCart }, this.updateOrderSummary);
  };

  updateOrderSummary = () => {
    const shoppingCart = { ...this.state.shoppingCart };
    const SUMMARY = { total: 0 };
    shoppingCart.orderSummary = shoppingCart.items.reduce((summary, item) => {
      if (!summary[item.name]) {
        summary[item.name] = { quantity: 0, ...item };
      }

      summary[item.name].quantity++;
      summary.total += item.price;

      return summary;
    }, SUMMARY);

    this.setState({ shoppingCart });
  };

  resetDeliveryAddress = () => {
    const user = { ...this.state.user };
    user.info.deliveryAddress = null;
    user.hasValidDeliveryAddress = false;
    user.hasPickedDeliveryAddress = false;
    this.setState({ user });
  };

  onSubmitDeliveryAddress = e => {
    e.preventDefault();
    const user = { ...this.state.user };
    const postCode = e.target.deliveryAddress.value;

    // user has valid post code
    if (isValidStockholmPostCode(postCode)) {
      user.hasValidDeliveryAddress = true;
      user.hasPickedDeliveryAddress = true;

      user.isFirstVisitOnHomePage = false;
      user.info.deliveryAddress = postCode;
      console.log("valid postcode");
      return this.setState({ user });
    }

    // invalid postcode and had a valid postcode before
    if (user.hasValidDeliveryAddress) {
      user.hasValidDeliveryAddress = false;
      user.info.deliveryAddress = null;
      return this.setState({ user });
    }

    // invalid post code and did not previously enter post code
    console.log("invalid postcode");
    user.hasPickedDeliveryAddress = true;
    user.hasValidDeliveryAddress = false;
    user.info.deliveryAddress = postCode;
    return this.setState({ user });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          sides: this.state.sides,
          shoppingCart: this.state.shoppingCart,
          user: this.state.user,
          register: this.register,
          logOut: this.logOut,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          removeAllProductTypesFromCart: this.removeAllProductTypesFromCart,
          onSubmitDeliveryAddress: this.onSubmitDeliveryAddress,
          resetDeliveryAddress: this.resetDeliveryAddress
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
