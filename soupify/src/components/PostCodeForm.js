import React from "react";
import { Link } from "react-router-dom";

const PostCodeForm = () => (
  <form style={{ display: "flex", justifyContent: "center" }}>
    <input placeholder="Ange postnummer" />
    <Link to={"/products"}>
      <button type="submit">Sök</button>
    </Link>
  </form>
);

export default PostCodeForm;
