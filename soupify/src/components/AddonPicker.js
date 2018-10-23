import React from "react";
import Consumer from "../context/Consumer";
import { Link } from "react-router-dom";
import NotificationTrigger from "./NotificationTrigger";
import { PRIMARY_GREEN } from "../constants";

export default class AddonPicker extends React.Component {
  state = {
    isExpanded: this.props.expanded || false
  };

  render() {
    const { isExpanded } = this.state;
    const { showHeader } = this.props;
    console.log(this.props);
    return (
      <div
        style={{
          cursor: "pointer",
          margin: "10px 0"
        }}
      >
        <p
          style={{ marginLeft: 0 }}
          className="has-text-weight-semibold"
          onClick={() => this.setState({ isExpanded: !isExpanded })}
        >
          {showHeader ? "Tillbehör " + (isExpanded ? "-" : "+") : null}
        </p>
        {isExpanded ? (
          <ul>
            <Consumer>
              {({ addToCart, products }) =>
                products[this.props.productType].map((product, index) => (
                  <li
                    key={product.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                      // background: index % 2 === 0 ? "#d3d3d34d" : null
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Link
                        to={`/products/${product.type}/${product.name
                          .replace(/\s/gi, "-")
                          .toLowerCase()}`}
                      >
                        <img
                          alt={product.name}
                          style={{ width: 50 }}
                          src={product.img}
                        />
                      </Link>
                      <span style={{ margin: "0 10px" }}>{product.name}</span>
                      <b>{product.price} kr</b>
                    </div>
                    <NotificationTrigger
                      message={product.name + " tillagd i varukorgen!"}
                    >
                      <button
                        style={{
                          margin: "0 10px",
                          border: `1px solid ${PRIMARY_GREEN}`,
                          background: "white",
                          color: PRIMARY_GREEN
                        }}
                        className="button is-small"
                        onClick={() => addToCart(product.id, product.type)}
                      >
                        Lägg till
                      </button>
                    </NotificationTrigger>
                  </li>
                ))
              }
            </Consumer>
          </ul>
        ) : null}
      </div>
    );
  }
}
