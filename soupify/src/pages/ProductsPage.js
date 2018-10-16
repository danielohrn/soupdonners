import React from "react";
import ContextConsumer from "../context/Consumer";

import Product from "../components/Product";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";

export default () => {
  return (
    <Section>
      <Columns>
        <ContextConsumer>
          {({ products, addToCart }) =>
            products.map(p => (
              <React.Fragment key={p.name}>
                <Columns.Column className="is-4">
                  <Product.Thumbnail
                    addToCart={addToCart}
                    key={p.name}
                    product={p}
                  />
                </Columns.Column>
              </React.Fragment>
            ))
          }
        </ContextConsumer>
      </Columns>
    </Section>
  );
};
