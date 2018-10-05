import React from "react";
import { Link } from "react-router-dom";
import Consumer from "../context/Consumer";

export default () => {
  return (
    <div>
      <Consumer>
        {({ shoppingCart: { items, orderSummary } }) => {
          const { total, ...products } = orderSummary; 
          return (
            <div>
              <ul>
                {Object.keys(products).map(product => (
                  <ProductSummary productName={product} productAmount={products[product]}/>
                ))}
              </ul>
              <p>{total ? 'Total kostnad: ' + total + 'kr' : 'Varukorgen är tom'}</p>
              {total > 0 ? <Link to={"/checkout"}>Gå till betalning</Link> : null}
            </div>
          );
        }}
      </Consumer>
    </div>
  );
};

const ProductSummary = ({productName, productAmount}) => {
  return (
    <li>Soppa: {productName} Antal: {productAmount}</li>
  ); 
}
