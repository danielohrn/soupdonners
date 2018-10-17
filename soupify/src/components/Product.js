import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bulma-components/lib/components/image";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Columns from "react-bulma-components/lib/components/columns";
import ArrowIcon from "../assets/ArrowIcon";
import { PRIMARY_GREEN } from "../constants";
import ProductTagsList from "./ProductTagsList";
import AddonPicker from "./AddonPicker";
import NotificationTrigger from "./NotificationTrigger";

const Thumbnail = ({
  addToCart,
  product: { name, img, price, id, tags, type }
}) => {
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

      <div
        style={{
          padding: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
            flexWrap: "wrap"
          }}
        >
          <div>
            <p>{name}</p>
            <p style={{ fontSize: "1.5em" }}>{price} kr</p>
          </div>
          <div>
            <NotificationTrigger message={name + " tillagd i varukorgen!"}>
              <button
                className="button"
                style={{
                  margin: "3px 0",
                  background: PRIMARY_GREEN,
                  color: "white"
                }}
                onClick={() => addToCart(id, type)}
              >
                Lägg till i varukorgen
              </button>
            </NotificationTrigger>
            <Link to={"/products/" + slug}>Detaljer</Link>
          </div>
        </div>
        {/* <ProductTagsList tags={tags} /> */}
        <AddonPicker />
      </div>
    </div>
  );
};

const Expanded = ({
  product: { img, description, name, price, id, tags },
  addToCart,
  match
}) => {
  console.log(match);
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // flexDirection: "column",
        // alignItems: "center",
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
      <Section>
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
        <Heading>{name}</Heading>
        <span>{price} kr</span>
        <p>{description}</p>
        <NotificationTrigger message={name + " tillagd i varukorgen!"}>
          <button className="button" onClick={() => addToCart(id)}>
            Lägg till i varukorg
          </button>
        </NotificationTrigger>
        <ProductTagsList tags={tags} />
        <Heading size={5}>Lägg till tillbehör</Heading>
        <AddonPicker expanded={true} />
      </Section>
    </div>
  );
};

const Product = {
  Thumbnail,
  Expanded
};

export default Product;
