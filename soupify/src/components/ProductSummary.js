import React from "react";
import { Columns } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class ProductSummary extends React.Component {
  state = {
    animation: "swoosh-in-from-left .5s forwards"
  };

  handleRemoveProductsOfType = () => {
    const REMOVE_PRODUCT_DELAY = 300;
    this.setState(
      {
        animation: "swoosh-out-to-right .5s forwards"
      },
      () => {
        setTimeout(
          () => this.props.removeAllProductTypesFromCart(this.props.product.id),
          REMOVE_PRODUCT_DELAY
        );
      }
    );
  };

  render() {
    return (
      <div
        style={{
          animation: this.state.animation
        }}
      >
        <Columns
          style={{
            boxShadow: "lightgrey 0px 1px 1px 0px",
            marginBottom: "1em"
          }}
          breakpoint={"mobile"}
        >
          <Columns.Column size={"half"}>
            <Link
              to={`/products/${
                this.props.product.type
              }/${this.props.product.name.replace(/\s/gi, "-").toLowerCase()}`}
            >
              <img
                src={this.props.product.img}
                alt={this.props.product.name}
                style={{ width: 135 }}
              />
            </Link>
          </Columns.Column>
          <Columns.Column size={"half"}>
            <h2 className="has-text-weight-semibold">
              {this.props.product.name}
            </h2>
            {/* <p>{description}</p> */}
            <p>{this.props.product.price} kr / styck</p>
          </Columns.Column>
          <Columns.Column size={"half"}>
            <button
              className="button is-danger"
              onClick={this.handleRemoveProductsOfType}
            >
              Ta bort artikeln
            </button>
          </Columns.Column>
          {this.props.showQuantityPicker === false ? null : (
            <Columns.Column size={"half"}>
              <button
                className="button"
                onClick={() =>
                  this.props.removeFromCart(
                    this.props.product.id,
                    this.props.product.type
                  )
                }
              >
                -
              </button>
              <span style={{ display: "inline-block", margin: ".5em" }}>
                {this.props.product.quantity}
              </span>
              <button
                className="button"
                onClick={() =>
                  this.props.addToCart(
                    this.props.product.id,
                    this.props.product.type
                  )
                }
              >
                +
              </button>
            </Columns.Column>
          )}
        </Columns>
      </div>
    );
  }
}
