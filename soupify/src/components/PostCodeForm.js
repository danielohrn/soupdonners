import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/LocationIcon";

const PostCodeForm = () => (
  <div style={{ margin: "1em 0" }}>
    <div style={{ position: "relative", maxWidth: 480 }}>
      <input className="input" placeholder="Leverera soppa till" />
      <Link
        className="button"
        style={{ position: "absolute", right: "0" }}
        to={"/products"}
      >
        <LocationIcon />
      </Link>
    </div>
  </div>
);

export default PostCodeForm;
