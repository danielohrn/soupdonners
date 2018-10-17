import React from "react";
import { ALLERGENICS } from "../libs/images";

export default ({ tags }) => {
  return (
    <ul>
      {tags.map(tagName => {
        return (
          <li
            key={tagName}
            style={{
              marginRight: 5,
              display: "inline-block"
            }}
          >
            <img
              src={ALLERGENICS[tagName].image}
              title={ALLERGENICS[tagName].description}
              style={{ width: 30 }}
              alt={tagName}
            />
          </li>
        );
      })}
    </ul>
  );
};
