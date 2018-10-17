import React from "react";
import { Columns } from "react-bulma-components";
import { Link } from "react-router-dom";

const ProductSummary = ({
  product: { quantity, name, img, price, id, description, type },
  addToCart,
  removeFromCart,
  removeAllProductTypesFromCart
}) => {
  return (
    <div
      style={{
        animation: "swoosh .5s forwards"
      }}
    >
      <Columns
        style={{ boxShadow: "lightgrey 0px 1px 1px 0px", marginBottom: "1em" }}
        breakpoint={"mobile"}
      >
        <Columns.Column size={"half"}>
          <Link to={"/products/" + name.replace(/\s/gi, "-").toLowerCase()}>
            <img src={img} alt={name} style={{ width: 135 }} />
          </Link>
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
          <button className="button" onClick={() => removeFromCart(id, type)}>
            -
          </button>
          <span style={{ display: "inline-block", margin: ".5em" }}>
            {quantity}
          </span>
          <button className="button" onClick={() => addToCart(id, type)}>
            +
          </button>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default ProductSummary;
