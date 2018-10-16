import React from "react";
import { PRIMARY_GREEN } from "../constants";

export default ({ tags }) => {
  return (
    <ul style={{ display: "flex" }}>
      {tags.map(tagName => (
        <li
          key={tagName}
          style={{
            marginRight: 5,
            padding: "5px",
            borderRadius: "5px",
            background: PRIMARY_GREEN
          }}
        >
          {tagName}
        </li>
      ))}
    </ul>
  );
};
