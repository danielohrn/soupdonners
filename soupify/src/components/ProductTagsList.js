import React from "react";
import { ALLERGENICS } from "../libs/images";

export default ({ tags }) => {
  return (
    <div  style={{
      display: "flex",
      margin: "10px 0px"
    }}
    >
      {tags.map(tagName => {
        return (
          <div
            key={tagName}
            style={{
              marginRight: 5,
              display: "flex",
              alignItems: "center",
              marginRight: "5px"
            }}
          >
            <img
              src={ALLERGENICS[tagName].image}
              title={ALLERGENICS[tagName].description}
              style={{ width: 30 }}
              alt={tagName}
            />
            <span> { ALLERGENICS[tagName].description } </span>
          </div>
        );
      })}
    </div>
  );
};
