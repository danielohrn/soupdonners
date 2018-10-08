import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";
import ProductSummary from "../components/ProductSummary";

export default () => {
  return (
    <div>
      <Consumer>
        {({
          addToCart,
          removeFromCart,
          removeAllProductTypesFromCart,
          shoppingCart: { orderSummary }
        }) => {
          const { total, ...products } = orderSummary;
          return (
            <div>
              <ul>
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
                    />
                  ))}
              </ul>
              <p>
                {total ? "Total kostnad: " + total + "kr" : "Varukorgen är tom"}
              </p>
              {total > 0 ? (
                <Link to={"/checkout"}>Gå till betalning</Link>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    </div>
  );
};
