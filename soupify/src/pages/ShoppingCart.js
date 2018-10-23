import React from "react";
import { Link, Route } from "react-router-dom";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";

import Consumer from "../context/Consumer";
import ProductSummary from "../components/ProductSummary";
import AddonPicker from "../components/AddonPicker";
import PostCodeForm from "../components/PostCodeForm";
import PaymentForm from "../components/PaymentForm";
import { checkoutFormScrollAndFocusHandler } from "../libs/utils";
import CheckoutSteps from "../components/CheckoutSteps";
import { PRIMARY_BUTTON } from "../constants";
import GreetingCard from "../components/GreetingCard";

export default ({ match }) => {
  return (
    <Section>
      <div style={{ marginBottom: 100 }}>
        <Consumer>
          {({
            addToCart,
            removeFromCart,
            removeAllProductTypesFromCart,
            shoppingCart: { orderSummary },
            products: { greetingCard },
            user: { hasPickedDeliveryAddress, hasValidDeliveryAddress, info }
          }) => {
            const { total, ...products } = orderSummary;
            return total ? (
              <React.Fragment>
                <Columns>
                  <Columns.Column size={"half"}>
                    <Columns.Column size={"full"} className="is-paddingless">
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
                    <Columns>
                      <Columns.Column className={"is-full"}>
                        <React.Fragment>
                          <Heading size={4}>
                            Vill du lägga till tillbehör?
                          </Heading>
                          <AddonPicker
                            productType={"sides"}
                            expanded={true}
                            showHeader={false}
                          />
                        </React.Fragment>
                      </Columns.Column>
                      <Columns.Column className={"is-full"}>
                        <GreetingCard
                          greetingCard={greetingCard}
                          addToCart={addToCart}
                        />
                      </Columns.Column>
                    </Columns>
                  </Columns.Column>
                  <Columns.Column size={"half"}>
                    <Columns breakpoint={"mobile"}>
                      <Columns.Column size={"full"} className="payment-form">
                        <CheckoutSteps />
                        {/* GAMMAL */}
                        {/* {hasPickedDeliveryAddress && hasValidDeliveryAddress ? (
                          <PaymentForm deliveryAddress={info.deliveryAddress} />
                        ) : (
                          <React.Fragment>
                            <Heading>Ange ditt postnummer</Heading>
                            <PostCodeForm />
                          </React.Fragment>
                        )} */}
                        {/* /GAMMAL */}
                      </Columns.Column>
                      <Columns.Column className="is-paddingless">
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
    .map(product => {
      return (
        <ProductSummary
          showQuantityPicker={
            products[product].type === "greetingCard" ? false : true
          }
          key={product}
          product={products[product]}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeAllProductTypesFromCart={removeAllProductTypesFromCart}
        />
      );
    });
};

class GoToCheckoutBanner extends React.Component {
  state = {
    showButton: true
  };

  render() {
    const { showButton } = this.state;
    const { total } = this.props;
    return (
      <div className="checkout-banner">
        <div>
          <Heading size={4} style={{ marginRight: 10, display: "inline" }}>
            Totalsumma
          </Heading>
          <span style={{ fontSize: 25 }}>{total} kr</span>
        </div>
        {showButton ? (
          <Link
            style={{ ...PRIMARY_BUTTON, display: "inline-block" }}
            to={"/cart/checkout/delivery"}
            className="button is-success is-medium"
            onClick={e => {
              checkoutFormScrollAndFocusHandler(e);
              this.setState(prevState => ({ showButton: false }));
            }}
          >
            Checka ut
          </Link>
        ) : null}
      </div>
    );
  }
}
