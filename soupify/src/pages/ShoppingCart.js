import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";
import ProductSummary from "../components/ProductSummary";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import AddonPicker from "../components/AddonPicker";

export default () => {
  return (
    <Section>
      <div style={{ marginBottom: 100 }}>
        <Consumer>
          {({
            addToCart,
            removeFromCart,
            removeAllProductTypesFromCart,
            shoppingCart: { orderSummary }
          }) => {
            const { total, ...products } = orderSummary;
            return total ? (
              <Columns>
                <Columns.Column size={"half"}>
                  {total ? (
                    <React.Fragment>
                      <Heading size={4}>Vill du lägga till tillbehör?</Heading>
                      <AddonPicker expanded={true} showHeader={false} />
                    </React.Fragment>
                  ) : null}
                </Columns.Column>
                <Columns.Column size={"half"}>
                  <Heading>Din varukorg</Heading>
                  <ProductsSummaryList
                    products={products}
                    removeAllProductTypesFromCart={
                      removeAllProductTypesFromCart
                    }
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                  />
                  <GoToCheckoutBanner total={total} />
                </Columns.Column>
              </Columns>
            ) : (
              <React.Fragment>
                <Heading>🥣 Varukorgen är tom.</Heading>
                <Link to={"/products"}>Gå till menyn</Link>
              </React.Fragment>
            );
          }}
        </Consumer>
      </div>
    </Section>
  );
};

const ProductsSummaryList = ({
  products,
  removeAllProductTypesFromCart,
  removeFromCart,
  addToCart
}) => {
  return Object.keys(products)
    .sort((a, b) => a > b)
    .map(product => (
      <ProductSummary
        key={product}
        product={products[product]}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeAllProductTypesFromCart={removeAllProductTypesFromCart}
      />
    ));
};

const GoToCheckoutBanner = ({ total }) => {
  return (
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
      <span className="has-text-weight-bold">Total kostnad: {total} kr</span>
      <Link className="button is-success" to={"/checkout"}>
        Gå till betalning
      </Link>
    </div>
  );
};
