import React from "react";
import { Route } from "react-router-dom";
import Product from "../components/Product";
import ContextConsumer from "../context/Consumer";

export default ({ match }) => (
  <ContextConsumer>
    {({ products, addToCart }) => {
      const productType = match.params.type;
      const product = products[productType].filter(
        p =>
          p.name.replace(/\s/gi, "-").toLowerCase() === match.params.productName
      )[0];

      return (
        <Route
          key={product.id}
          path={"/products/:type/:productName"}
          exact={false}
          render={props => (
            <Product.Expanded
              {...props}
              product={product}
              addToCart={addToCart}
            />
          )}
        />
      );
    }}
  </ContextConsumer>
);
