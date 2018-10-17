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
  product: { name, img, price, id, tags, type, title }
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Heading
                size={4}
                style={{
                  marginBottom: 5,
                  marginRight: 5,
                  display: "inline-block"
                }}
              >
                {title || name}
              </Heading>
              <ProductTagsList tags={tags} />
            </div>
            <Heading subtitle size={6} style={{ marginBottom: 5 }}>
              {name}
            </Heading>

            <p style={{ fontSize: "1.5em" }}>{price} kr</p>
          </div>
          <div>
            <NotificationTrigger message={"Tillagd i varukorgen!"}>
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
            <Link className="button is-text" to={"/products/" + slug}>
              Läs mer om innehållet
            </Link>
          </div>
        </div>
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
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        overflow: "scroll"
        // padding: "30px 0"
      }}
    >
      <Section>
        <Link to={"/products"}>
          <ArrowIcon
            style={{
              transform: "rotate(180deg)",
              position: "fixed",
              top: 15,
              left: 10
            }}
          />
        </Link>
        <Columns>
          <Columns.Column>
            <img src={img} alt={name} style={{ width: 500 }} />
          </Columns.Column>

          <Columns.Column
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <Heading style={{ marginBottom: 5 }}>{name}</Heading>
              <ProductTagsList tags={tags} />
              <p style={{ fontSize: 35 }} className="has-text-weight-bold">
                {price} kr
              </p>
              <p style={{ marginTop: 20 }}> {description}</p>
            </div>

            <NotificationTrigger message={"Tillagd i varukorgen!"}>
              <button
                style={{ marginTop: 10 }}
                className="button is-success"
                onClick={() => addToCart(id)}
              >
                Lägg till i varukorg
              </button>
            </NotificationTrigger>
          </Columns.Column>
        </Columns>

        <Columns breakpoint={"mobile"}>
          <Columns.Column size={"half-tablet"}>
            <Heading size={5}>Lägg till tillbehör</Heading>
            <AddonPicker expanded={true} />
          </Columns.Column>
        </Columns>
      </Section>
    </div>
  );
};

const Product = {
  Thumbnail,
  Expanded
};

export default Product;
