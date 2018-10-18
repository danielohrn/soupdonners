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
              <React.Fragment>
                <Columns>
                  <Columns.Column size={"half"}>
                    <Columns>
                      <Columns.Column size={"full"}>
                        <React.Fragment>
                          <Heading size={4}>
                            Vill du lägga till tillbehör?
                          </Heading>
                          <AddonPicker expanded={true} showHeader={false} />
                        </React.Fragment>
                      </Columns.Column>

                      <Columns.Column size={"full"}>
                        <Heading>Din varukorg</Heading>
                        <ProductsSummaryList
                          products={products}
                          removeAllProductTypesFromCart={
                            removeAllProductTypesFromCart
                          }
                          removeFromCart={removeFromCart}
                          addToCart={addToCart}
                        />
                      </Columns.Column>
                    </Columns>
                  </Columns.Column>
                  <Columns.Column size={"half"}>
                    <Columns breakpoint={"mobile"}>
                      <Columns.Column size={"full"} className="payment-form">
                        <Heading size={4}>Kortuppgifter</Heading>
                        <input
                          id="payment"
                          style={{ marginBottom: 10 }}
                          type="text"
                          placeholder="Kortnummer"
                          className="input"
                        />
                        <div className="field is-grouped">
                          <input
                            style={{ marginBottom: 10 }}
                            type="text"
                            placeholder="CVC"
                            className="input"
                          />
                          <input
                            style={{ marginBottom: 10 }}
                            type="text"
                            placeholder="Expiry"
                            className="input"
                          />
                        </div>
                        <button
                          className="button"
                          onClick={e => e.preventDefault()}
                          type="submit"
                        >
                          Betala
                        </button>
                      </Columns.Column>
                      <Columns.Column>
                        <GoToCheckoutBanner total={total} />
                      </Columns.Column>
                    </Columns>
                  </Columns.Column>
                </Columns>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Heading>
                  <span role="img" aria-label="va">
                    🥣
                  </span>{" "}
                  Varukorgen är tom.
                </Heading>
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
    <div className="checkout-banner">
      <div>
        <Heading size={4} style={{ display: "inline", marginRight: 10 }}>
          Totalsumma
        </Heading>
        <span style={{ fontSize: 25 }}>{total} kr</span>
      </div>
      <button
        className="button is-success is-medium"
        onClick={() => {
          const MOBILE_BREAKPOINT = 790;
          const BOTTOM_OF_WINDOW = window.document.body.getBoundingClientRect()
            .bottom;

          // on mobile - scroll to bottom of page to payment form
          if (window.innerWidth < MOBILE_BREAKPOINT) {
            window.scroll({ top: BOTTOM_OF_WINDOW, behavior: "smooth" });
          }
          // focus on input field after 500 ms so scroll to bottom is not interupted
          setTimeout(() => document.getElementById("payment").focus(), 500);
        }}
      >
        Gå till betalning
      </button>
    </div>
  );
};
