import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";
import ProductSummary from "../components/ProductSummary";
import { Columns } from "react-bulma-components";

export default () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <Consumer>
        {({
          addToCart,
          removeFromCart,
          removeAllProductTypesFromCart,
          shoppingCart: { orderSummary },
          hasNotification
        }) => {
          const { total, ...products } = orderSummary;
          return (
            <Columns>
              <Columns.Column size={"half"} offset={"one-quarter"}>
                {Object.keys(products)
                  .sort((a, b) => a > b)
                  .map(product => (
                    <ProductSummary
                      key={product}
                      product={products[product]}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      removeAllProductTypesFromCart={
                        removeAllProductTypesFromCart
                      }
                      hasNotification={hasNotification}
                    />
                  ))}
                {total ? (
                  <div
                    style={{
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      padding: "2em 1em",
                      border: "1px solid lightgrey",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "white"
                    }}
                  >
                    <span className="has-text-weight-bold">
                      Total kostnad: {total} kr
                    </span>
                    <Link className="button is-success" to={"/checkout"}>
                      Gå till betalning
                    </Link>
                  </div>
                ) : (
                  "Varukorgen är tom"
                )}
              </Columns.Column>
            </Columns>
          );
        }}
      </Consumer>
    </div>
  );
};
