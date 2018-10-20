import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";
import ProductSummary from "../components/ProductSummary";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";

import AddonPicker from "../components/AddonPicker";
import PostCodeForm from "../components/PostCodeForm";
import PaymentForm from "../components/PaymentForm";
import { checkoutFormScrollAndFocusHandler } from "../libs/utils";

export default () => {
  return (
    <Section>
      <div style={{ marginBottom: 100 }}>
        <Consumer>
          {({
            addToCart,
            removeFromCart,
            removeAllProductTypesFromCart,
            shoppingCart: { orderSummary },
            user: { hasPickedDeliveryAddress, hasValidDeliveryAddress, info }
          }) => {
            const { total, ...products } = orderSummary;
            return total ? (
              <React.Fragment>
                <Columns>
                  <Columns.Column size={"half"}>
                    <Columns>
                      <Columns.Column className={"is-full"}>
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
                        {hasPickedDeliveryAddress && hasValidDeliveryAddress ? (
                          <PaymentForm deliveryAddress={info.deliveryAddress} />
                        ) : (
                          <React.Fragment>
                            <Heading>Ange ditt postnummer</Heading>
                            <PostCodeForm />
                          </React.Fragment>
                        )}
                      </Columns.Column>
                      <Columns.Column>
                        <GoToCheckoutBanner
                          userHasPickedDeliveryAddress={
                            hasPickedDeliveryAddress
                          }
                          total={total}
                        />
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

const GoToCheckoutBanner = ({ total, userHasPickedDeliveryAddress }) => {
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
        onClick={checkoutFormScrollAndFocusHandler}
      >
        {userHasPickedDeliveryAddress
          ? "Gå till betalning"
          : "Kontrollera leveransadress"}
      </button>
    </div>
  );
};
