import React from "react";
import { AppContext } from "./Provider";

export default class ContextConsumer extends React.Component {
  render() {
    return <AppContext.Consumer>{this.props.children}</AppContext.Consumer>;
  }
}
