import React, { Component } from "react";
import Heading from "react-bulma-components/lib/components/heading";
import { PRIMARY_BUTTON } from "../constants";
import { questionMark } from "../libs/images";

export default class GreetingCard extends Component {
  state = {
    showForm: true,
    showToolTip: false
  };

  onMouseEnter = () => {
    this.setState(prevState => ({
      showToolTip: true
    }));
  };

  onMouseLeave = () => {
    this.setState(prevState => ({
      showToolTip: false
    }));
  };

  onAddGreeting = () => {
    this.props.addToCart(
      this.props.greetingCard.id,
      this.props.greetingCard.type
    );
    this.setState({ showForm: false });
  };

  render() {
    const { showForm, showToolTip } = this.state;
    return showForm ? (
      <React.Fragment>
        <Heading size={4} style={{ position: "relative" }}>
          {this.props.greetingCard.description}
          <img
            src={questionMark}
            style={{
              width: 30,
              position: "absolute",
              bottom: 0
            }}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </Heading>

        {showToolTip ? (
          <div style={{ margin: "10px 0" }}>
            Här kan du lämna en personlig hälsning om det är en gåva som du vill
            skicka till någon du tycker om.
          </div>
        ) : null}
        <div>
          <textarea
            id="greetingText"
            className="textarea"
            placeholder="Skicka med en personlig hälsning till din beställning"
          />
          <button
            className="button"
            style={{ ...PRIMARY_BUTTON, marginTop: 10 }}
            onClick={() => {
              if (document.getElementById("greetingText").value) {
                return this.onAddGreeting();
              }
              // is no value in text area focus on it
              document.getElementById("greetingText").focus();
            }}
          >
            Lägg till
          </button>
          <button
            style={{ marginTop: 10, marginLeft: 10 }}
            className="button"
            onClick={() => this.setState(prevState => ({ showForm: false }))}
          >
            Nej tack
          </button>
        </div>
      </React.Fragment>
    ) : null;
  }
}
