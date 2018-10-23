import React from "react";
import { Redirect } from "react-router-dom";
import ContextConsumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <ContextConsumer>
        {({ shoppingCart: { orderSummary } }) =>
          orderSummary.total ? (
            <div>Ayyeee grattis soppan är på gång</div>
          ) : (
            <Redirect to={"/"} />
          )
        }
      </ContextConsumer>
    </div>
  );
};
