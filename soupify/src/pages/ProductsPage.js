import React from "react";
import { Route } from "react-router-dom";
import { Columns as Row } from "react-bulma-components";
import ContextConsumer from "../context/Consumer";

import NotificationArea from "../components/NotificationArea";
import Product from "../components/Product";
import Columns from 'react-bulma-components/lib/components/columns';


export default props => {
  return (
    
    <Columns>
      
      <ContextConsumer>
        {({ products, addToCart, hasNotification }) =>
          products.map(p => (
            <React.Fragment key={p.name}>
            <Columns.Column className="is-4">
              <Product.Thumbnail
                addToCart={addToCart}
                key={p.name}
                product={p}
              />

              <NotificationArea
                showIf={hasNotification}
                message={"Tillagd i varukorgen!"}
              />
              </Columns.Column>
            </React.Fragment>
          ))
        }
      </ContextConsumer>
    </Columns>
  );
};
