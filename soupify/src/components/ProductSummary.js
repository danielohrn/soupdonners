import React from "react";
import { Columns } from "react-bulma-components";

const ProductSummary = ({
  product: { quantity, name, img, price, id, description },
  addToCart,
  removeFromCart,
  removeAllProductTypesFromCart
}) => {
  return (
    <React.Fragment>
      <Columns
        style={{ boxShadow: "lightgrey 0px 1px 1px 0px", marginBottom: "1em" }}
        breakpoint={"mobile"}
      >
        <Columns.Column size={"half"}>
          <img src={img} alt={name} style={{ width: 135 }} />
        </Columns.Column>
        <Columns.Column size={"half"}>
          <h2 className="has-text-weight-semibold">{name}</h2>
          <p>{description}</p>
          <p>{price} kr / styck</p>
        </Columns.Column>
        <Columns.Column size={"half"}>
          <button
            className="button is-danger"
            onClick={e => {
              e.preventDefault();
              removeAllProductTypesFromCart(id);
            }}
          >
            Ta bort artikeln
          </button>
        </Columns.Column>
        <Columns.Column size={"half"}>
          <button className="button" onClick={() => removeFromCart(id)}>
            -
          </button>
          <span style={{ display: "inline-block", margin: ".5em" }}>
            {quantity}
          </span>
          <button className="button" onClick={() => addToCart(id)}>
            +
          </button>
        </Columns.Column>
      </Columns>
    </React.Fragment>
  );
};

export default ProductSummary;
