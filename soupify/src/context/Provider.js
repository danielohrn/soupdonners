import React, { Component, createContext } from "react";
import STATE from "./state";

export const AppContext = createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = STATE;
  }

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
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
