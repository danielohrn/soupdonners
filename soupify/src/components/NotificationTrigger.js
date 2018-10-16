import React, { Component } from "react";
import Notification from "./Notification";

export default class NotificationTrigger extends Component {
  state = {
    active: false
  };

  showNotification = () => {
    const NOTIFICATION_DURATION = 1000;
    const DEBOUNCE_DURATION = 200;

    clearTimeout(this.notificationtimeOut);

    this.notificationtimeOut = setTimeout(() => {
      this.setState({ active: true }, () => {
        setTimeout(() => {
          this.setState({ active: false });
        }, NOTIFICATION_DURATION);
      });
    }, DEBOUNCE_DURATION);
  };

  componentWillMount() {
    clearTimeout(this.notificationtimeOut);
  }

  render() {
    const { active } = this.state;
    return (
      <div onClick={this.showNotification}>
        {this.props.children}
        {active ? <Notification message={this.props.message} /> : null}
      </div>
    );
  }
}
