import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/LocationIcon";

const PostCodeForm = () => (
  <form style={{ display: "flex", margin: "1em 0" }}>
    <div style={{ position: "relative", width: "100%" }}>
      <input className="input" placeholder="Ange postnummer" />
      <Link
        className="button"
        style={{ position: "absolute", right: "0" }}
        to={"/products"}
      >
        <LocationIcon />
      </Link>
    </div>
  </form>
);

export default PostCodeForm;
