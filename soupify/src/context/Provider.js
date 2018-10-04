import React, { Component, createContext } from "react";

export const AppContext = createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Krya på dig",
          price: 99,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgacPAcqf9X5blJa_m6t6zXfd9s4YZj4WA62FkztWFshjdf3r"
        },
        {
          name: "Höstsoppa",
          price: 99,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgacPAcqf9X5blJa_m6t6zXfd9s4YZj4WA62FkztWFshjdf3r"
        },
        {
          name: "Kall soppa",
          price: 99,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgacPAcqf9X5blJa_m6t6zXfd9s4YZj4WA62FkztWFshjdf3r"
        }
      ]
    };
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
