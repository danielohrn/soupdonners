import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <Consumer>
        {({ addToCart, removeFromCart, shoppingCart: { orderSummary } }) => {
          const { total, ...products } = orderSummary;
          return (
            <div>
              <ul>
                {Object.keys(products)
                  .sort((a, b) => a > b)
                  .map(product => (
                    <ProductSummary
                      key={product}
                      product={products[product]}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                    />
                  ))}
              </ul>
              <p>
                {total ? "Total kostnad: " + total + "kr" : "Varukorgen är tom"}
              </p>
              {total > 0 ? (
                <Link to={"/checkout"}>Gå till betalning</Link>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    </div>
  );
};

const ProductSummary = ({
  product: { quantity, name, img, price, id },
  addToCart,
  removeFromCart
}) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <img src={img} alt={name} style={{ width: 120 }} />
      {name}
      <button onClick={() => removeFromCart(id)}>-</button>
      {quantity}
      <button onClick={() => addToCart(id)}>+</button>
    </li>
  );
};
