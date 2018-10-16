import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bulma-components/lib/components/image";

import ArrowIcon from "../assets/ArrowIcon";
import { PRIMARY_GREEN } from "../constants";

import AddonPicker from "./AddonPicker";
import NotificationTrigger from "./NotificationTrigger";

const ProductTagsList = ({ tags }) => {
  return (
    <ul style={{ display: "flex", color: "white" }}>
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

const Thumbnail = ({ addToCart, product: { name, img, price, id, tags } }) => {
  const slug = name.replace(/\s/gi, "-").toLowerCase();
  return (
    <div
      style={{
        margin: "5px 1%",
        boxShadow: "lightgrey 0px 1px 1px 0px"
      }}
    >
      <Link to={"/products/" + slug}>
        <Image src={img} alt={name} size="3by2" />
      </Link>
      <p>{name}</p>
      <p>{price} kr</p>
      <NotificationTrigger message={name + " tillagd i varukorgen!"}>
        <button
          className="button"
          style={{ margin: "3px 0" }}
          onClick={() => addToCart(id)}
        >
          Lägg till i varukorgen
        </button>
      </NotificationTrigger>
      <Link to={"/products/" + slug}>
        <button className="button">Detaljer</button>
      </Link>
      <ProductTagsList tags={tags} />
      <AddonPicker />
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
      <NotificationTrigger message={name + " tillagd i varukorgen!"}>
        <button onClick={() => addToCart(id)}>Lägg till i varukorg</button>
      </NotificationTrigger>
      <AddonPicker />
    </div>
  );
};

const Product = {
  Thumbnail,
  Expanded
};

export default Product;
