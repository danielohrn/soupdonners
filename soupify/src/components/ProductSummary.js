import React from "react";

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

export default ProductSummary;
