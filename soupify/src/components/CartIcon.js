import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_GREEN } from "../constants";

export default ({ amount }) => (
  <Link
    to={"/cart"}
    style={{
      zIndex: 1,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      position: "fixed",
      top: 7,
      right: 0,
      width: 80,
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      background: PRIMARY_GREEN
    }}
  >
    {/* <Link to={"/cart"}> */}
    <svg
      style={{
        transform: "rotateY(180deg)",
        fill: "white"
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
    </svg>
    <span className="is-size-4">{amount}</span>
    {/* </Link> */}
  </Link>
);
