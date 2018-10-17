import React from "react";
import ContextConsumer from "../context/Consumer";

import Product from "../components/Product";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";

export default () => {
  return (
    <Section>
      <Columns>
        <ProductGallery TYPE={"soups"} />
        <ProductGallery TYPE={"sides"} />
      </Columns>
    </Section>
  );
};

const ProductGallery = ({ TYPE = "soups" }) => {
  return (
    <React.Fragment>
      <Columns.Column size={"full"}>
        <Heading>{TYPE === "soups" ? "Soppor" : "Tillbehör"}</Heading>
      </Columns.Column>
      <ContextConsumer>
        {({ products, addToCart }) =>
          products[TYPE].map(p => (
            <Columns.Column key={p.name} className="is-4">
              <Product.Thumbnail
                addToCart={addToCart}
                key={p.name}
                product={p}
              />
            </Columns.Column>
          ))
        }
      </ContextConsumer>
    </React.Fragment>
  );
};
