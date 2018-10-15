import React from "react";
import { Route } from "react-router-dom";
import { Columns as Row } from "react-bulma-components";
import ContextConsumer from "../context/Consumer";

import NotificationArea from "../components/NotificationArea";
import Product from "../components/Product";

export default props => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <ContextConsumer>
        {({ products, addToCart, hasNotification }) =>
          products.map(p => (
            <React.Fragment key={p.name}>
              <Product.Thumbnail
                addToCart={addToCart}
                key={p.name}
                product={p}
              />

              <NotificationArea
                showIf={hasNotification}
                message={"Tillagd i varukorgen!"}
              />
            </React.Fragment>
          ))
        }
      </ContextConsumer>
    </div>
  );
};
