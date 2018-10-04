import React from "react";

import ContextConsumer from "../context/Consumer";

export default class ProductsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Soppor bror</h1>
            <ContextConsumer>
                {({products}) => (
                  products.map(p => (
                    <Product key={p.name} name={p.name} price={p.price} img={p.img}/>
                  ))
                )}
            </ContextConsumer>
      </div>
    );
  }
}


const Product = ({name, price, img}) => (
  <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <img style={{width: '50%'}}src={img} alt={name}/>
    <p>{name}</p>
    <p>{price} SEK</p>
    <button>Köp</button>
  </div>
); 

