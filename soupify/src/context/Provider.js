import React, { Component, createContext } from "react";
import STATE from "./state";
import { isValidStockholmPostCode } from "../libs/utils";

export const AppContext = createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = STATE;
  }

  toggleNavBar = () => {
    this.setState({ isNavBarOpen: !this.state.isNavBarOpen });
  };

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

  onPay = () => {
    const user = { ...this.state.user };
    const paymentPending = { ...user, payment: { isActive: true } };
    const paymentDone = { ...user, payment: { isActive: false, isDone: true } };
    // payment pending
    this.setState({ user: paymentPending }, () => {
      // fake latency
      setTimeout(() => {
        // payment done
        this.setState({ user: paymentDone });
      }, 1500);
    });
  };

  onSubmitDeliveryAddress = e => {
    e.preventDefault();

    const user = {
      ...this.state.user,
      info: {
        ...this.state.user.info,
        firstName: e.target.firstName ? e.target.firstName.value : null
      }
    };
    const postCodeInt = parseInt(e.target.postCode.value, 10);

    // user has valid post code
    if (isValidStockholmPostCode(postCodeInt)) {
      console.log("valid postcode");
      user.hasValidDeliveryAddress = true;
      user.hasPickedDeliveryAddress = true;

      user.info.deliveryAddress = postCodeInt;
      return this.setState({ user });
    }

    // invalid postcode and had a valid postcode before
    if (user.hasValidDeliveryAddress) {
      console.log("invalid postcode and had a valid postcode before");
      user.hasValidDeliveryAddress = false;
      user.info.deliveryAddress = null;
      return this.setState({ user });
    }

    // invalid post code and did not previously enter post code
    console.log("invalid post code and did not previously enter post code");
    user.hasPickedDeliveryAddress = true;
    user.hasValidDeliveryAddress = false;
    user.info.deliveryAddress = postCodeInt;
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
          resetDeliveryAddress: this.resetDeliveryAddress,
          onPay: this.onPay,
          toggleNavBar: this.toggleNavBar,
          isNavBarOpen: this.state.isNavBarOpen
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
