import React from "react";
import Consumer from "../context/Consumer";
import NotificationTrigger from "./NotificationTrigger";

export default class AddonPicker extends React.Component {
  state = {
    isExpanded: false
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <div>
        <p onClick={() => this.setState({ isExpanded: !isExpanded })}>
          {"Tillbehör " + (isExpanded ? "-" : "+")}
        </p>
        {isExpanded ? (
          <ul>
            <Consumer>
              {({ addToCart, sides }) =>
                sides.map(side => (
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-betwween"
                    }}
                  >
                    <img alt={side.name} style={{ width: 50 }} src={side.img} />
                    {side.name} {side.price} kr
                    <NotificationTrigger
                      message={side.name + " tillagd i varukorgen!"}
                    >
                      <button onClick={() => addToCart(side.id, "sides")}>
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
