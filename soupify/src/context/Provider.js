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

    // if product found add it to cart
    if (productToAdd) {
      shoppingCart.items.push(productToAdd);
      this.setState({ shoppingCart });
      this.updateOrderSummary();
    }
  };

  updateOrderSummary = () => {
    const shoppingCart = { ...this.state.shoppingCart };
    shoppingCart.orderSummary = shoppingCart.items.reduce(
      (summary, item) => {
        if (!summary[item.name]) {
          summary[item.name] = 0;
        }

        summary[item.name]++;
        summary.total += item.price;

        return summary;
      },
      { total: 0 }
    );

    this.setState({ shoppingCart });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          shoppingCart: this.state.shoppingCart,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
