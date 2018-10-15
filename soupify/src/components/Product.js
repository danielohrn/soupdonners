import React from "react";
import { Columns as Row } from "react-bulma-components";
import Image from 'react-bulma-components/lib/components/image';

import { Link } from "react-router-dom";
import ArrowIcon from "../assets/ArrowIcon";

const Thumbnail = ({ addToCart, product: { name, img, price, id } }) => {
  const slug = name.replace(/\s/gi, "-").toLowerCase();

  return (
    <div
      style={{
        margin: "5px 1%",
        boxShadow: "lightgrey 0px 1px 1px 0px"
      }}
    >
      <Link to={"/products/" + slug}>
        <Image
          src={img}
          alt={name}
          size="3by2"
        />
      </Link>
      <div style={{ padding: "0 .5em" }}>
        <p>{name}</p>
        <p>{price} kr</p>
        <button onClick={() => addToCart(id)}>Lägg till i varukorgen</button>
        <Link to={"/products/" + slug}>
          <button>Detaljer</button>
        </Link>
      </div>
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

      <img src={img} alt={name} style={{ width: 500 }} />
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
