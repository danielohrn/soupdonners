import React from "react";

const ProductSummary = ({
  product: { quantity, name, img, price, id },
  addToCart,
  removeFromCart,
  removeAllProductTypesFromCart
}) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <button
        onClick={e => {
          e.preventDefault();
          removeAllProductTypesFromCart(id);
        }}
      >
        X
      </button>
      <img src={img} alt={name} style={{ width: 120 }} />
      {name}
      <button onClick={() => removeFromCart(id)}>-</button>
      {quantity}
      <button onClick={() => addToCart(id)}>+</button>
    </li>
  );
};

export default ProductSummary;
