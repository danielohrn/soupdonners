import React from "react";
import { ALLERGENICS } from "../libs/images";

export default () => {
  return (
    <div className="wrap-mobile">
      {Object.keys(ALLERGENICS).map(allergenic => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ALLERGENICS[allergenic].image}
            style={{ width: 30, height: 30 }}
          />
          <span>{ALLERGENICS[allergenic].description}</span>
        </div>
      ))}
    </div>
  );
};
