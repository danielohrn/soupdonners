import React, { Component, createContext } from "react";
import STATE from "./state";

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

    this.setState({ user }, () => console.log(this.state.user));
  };

  logOut = () => {
    this.setState({
      user: { isSignedIn: false, info: { name: null, email: null } }
    });
  };

  addToCart = id => {
    const shoppingCart = { ...this.state.shoppingCart };

    // find product that matches with provided id
    const productToAdd = this.state.products.filter(
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
    let index;
    for (let i = 0; i < shoppingCart.items.length; ++i) {
      if (shoppingCart.items[i].id === id) {
        index = i;
        shoppingCart.items.splice(index, 1);
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

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          shoppingCart: this.state.shoppingCart,
          user: this.state.user,
          register: this.register,
          logOut: this.logOut,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
