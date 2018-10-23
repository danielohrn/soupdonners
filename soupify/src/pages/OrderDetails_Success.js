import React from "react";
import { Redirect } from "react-router-dom";
import Section from "react-bulma-components/lib/components/section";
import Columns from "react-bulma-components/lib/components/columns";
import Heading from "react-bulma-components/lib/components/heading";

import bikeIcon from "../assets/img/iconmonstr-bicycle-4.svg";
import DeliveryVespa from "../components/DeliveryVespa";
import ContextConsumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <ContextConsumer>
        {({
          shoppingCart: {
            orderSummary: { total, ...products }
          }
        }) => (
          // orderSummary.total ? (
          <Columns>
            <Columns.Column>
              <Section style={{ textAlign: "center" }}>
                <Heading>Tack för din beställning!</Heading>
                <Heading
                  style={{
                    marginTop: 30
                  }}
                  subtitle
                  size={5}
                >
                  Ditt ordernummer: <span>117</span>
                </Heading>
                {/* <img
                  src={bikeIcon}
                  style={{
                    height: 300
                  }}
                /> */}
                {Object.keys(products).map(key => (
                  <div>
                    <p>
                      {products[key].name} {products[key].quantity} st
                    </p>
                  </div>
                ))}
                Total kostnad {total} kr
              </Section>
            </Columns.Column>
          </Columns>
        )
        // ) : (
        //   <Redirect to={"/"} />
        // )
        }
      </ContextConsumer>
    </div>
  );
};
