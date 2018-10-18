import React from "react";
import { PRIMARY_GREEN } from "../constants";

const Notification = ({ message, placement = "TOP" }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: placement === "TOP" ? 0 : null,
        bottom: placement === "TOP" ? null : 0,
        left: 0,
        width: "100%",
        padding: ".9em",
        border: "1px solid lightgrey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: PRIMARY_GREEN,
        background: "white",
        animation: "swoosh-in-from-left .3s ease",
        zIndex: 3
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
