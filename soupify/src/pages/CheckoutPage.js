import React from "react";
import { Redirect } from "react-router-dom";
import ContextConsumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <ContextConsumer>
        {({ shoppingCart: { orderSummary } }) =>
          orderSummary.total ? (
            <div>
              <p>
                Att betala: {orderSummary.total}
                kr
              </p>
              <form>
                <input type="text" placeholder="Kortnummer" />
                <button onClick={e => e.preventDefault()} type="submit">
                  Betala
                </button>
              </form>
            </div>
          ) : (
            <Redirect to={"/"} />
          )
        }
      </ContextConsumer>
    </div>
  );
};
