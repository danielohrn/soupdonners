import React from "react";
import { Link } from "react-router-dom";

const PostCodeForm = () => (
  <form
    style={{ display: "flex", justifyContent: "center", padding: "15px 0" }}
  >
    <input placeholder="Ange postnummer" />
    <Link to={"/products"}>
      <button type="submit">Sök</button>
    </Link>
  </form>
);

export default PostCodeForm;
