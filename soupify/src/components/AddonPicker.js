import React from "react";
import Consumer from "../context/Consumer";
import { Link } from "react-router-dom";
import NotificationTrigger from "./NotificationTrigger";

export default class AddonPicker extends React.Component {
  state = {
    isExpanded: this.props.expanded || false
  };

  render() {
    const { isExpanded } = this.state;
    const { showHeader } = this.props;
    return (
      <div
        style={{
          cursor: "pointer",
          margin: "10px 0"
          // boxShadow: "lightgrey 0px 1px 1px 0px"
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
              {({ addToCart, products: { sides } }) =>
                sides.map(side => (
                  <li
                    key={side.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Link
                        to={`/products/${side.type}/${side.name
                          .replace(/\s/gi, "-")
                          .toLowerCase()}`}
                      >
                        <img
                          alt={side.name}
                          style={{ width: 50 }}
                          src={side.img}
                        />
                      </Link>
                      <span style={{ margin: "0 10px" }}>{side.name}</span>
                      <b>{side.price} kr</b>
                    </div>
                    <NotificationTrigger
                      message={side.name + " tillagd i varukorgen!"}
                    >
                      <button
                        style={{ margin: "0 10px" }}
                        className="button is-small"
                        onClick={() => addToCart(side.id, "sides")}
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
