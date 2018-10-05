import React from "react";

import { Link } from "react-router-dom";
import ArrowIcon from "../assets/ArrowIcon";

const Thumbnail = ({ product: { name, img, price, id } }) => {
  const slug = name.replace(/\s/gi, "-").toLowerCase();

  return (
    <div style={{ width: "48%", margin: "0 1%", maxWidth: "400px" }}>
      <Link to={"/products/" + slug}>
        <img src={img} alt={name} style={{ width: "100%", height: "auto" }} />
        <p>{name}</p>
        <p>{price} kr</p>
      </Link>
    </div>
  );
};

const Expanded = ({
  product: { img, description, name, price, id },
  addToCart
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        transition: "all 1s ease",
        padding: "30px 0"
      }}
    >
      <Link to={"/products"}>
        <ArrowIcon
          style={{
            transform: "rotate(180deg)",
            position: "fixed",
            top: 10,
            left: 10
          }}
        />
      </Link>

      <img src={img} style={{ width: 500 }} />
      <p>{name}</p>
      <p>{price} kr</p>
      <p>{description}</p>

      <button onClick={() => addToCart(id)}>Lägg till i varukorg</button>
    </div>
  );
};

const Product = {
  Thumbnail,
  Expanded
};

export default Product;
