import React from "react";
import { flexCenter, h2 } from "../styles";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hur fungerar det?</h1>

        <Row>
          <Column>
            <img
              alt="bruh"
              style={{ width: "60%", height: "auto" }}
              src="https://travelshop.se/wp-content/uploads/2017/12/Suspended-soppa-e1523262072796.jpg"
            />
          </Column>
          <Column>
            <h2 style={h2}>Välj soppa</h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2 style={h2}>
              Beställ soppa till dig själv eller som en gåva till nära och kära
            </h2>
          </Column>
          <Column>
            <img
              alt="bruh"
              style={{ width: "60%", height: "auto" }}
              src="https://www.technobezz.com/files/uploads/2017/12/Door-Dash.png"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <img
              alt="bruh"
              style={{ width: "60%", height: "auto" }}
              src="https://i2.wp.com/techbizweb.com/wp-content/uploads/2017/01/What-Seperates-Uber-from-a-Taxi-and-How-to-Use-the-Uber-App.gif?fit=400%2C700"
            />
          </Column>
          <Column>
            <h2 style={h2}>Följ din leverans</h2>
          </Column>
        </Row>
      </div>
    );
  }
}

const Row = ({ children }) => (
  <div style={{ display: "flex", maxWidth: "500px", margin: "0 auto" }}>
    {children}
  </div>
);

const Column = ({ children }) => (
  <div style={{ ...flexCenter, width: "48%", padding: "0 2%" }}>{children}</div>
);
