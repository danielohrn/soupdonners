import React from "react";

import { Route } from "react-router-dom";
import ContextConsumer from "../context/Consumer";

import Product from "../components/Product";

export default props => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <ContextConsumer>
        {({ products, addToCart }) =>
          products.map(p => (
            <React.Fragment key={p.name}>
              <Product.Thumbnail
                addToCart={addToCart}
                key={p.name}
                product={p}
              />

              <Route
                key={p.id}
                path={
                  props.match.path +
                  "/" +
                  p.name.replace(/\s/gi, "-").toLowerCase()
                }
                render={props => (
                  <Product.Expanded
                    {...props}
                    product={p}
                    addToCart={addToCart}
                  />
                )}
              />
            </React.Fragment>
          ))
        }
      </ContextConsumer>
    </div>
  );
};
