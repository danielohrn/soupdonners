import React from 'react';

import Consumer from '../context/Consumer'; 
import ShoppingCartIcon from '../assets/CartIcon'; 

export default () => {
    return (
        <Consumer>
            {({toggleShoppingCart, shoppingCart: {isOpen, items}}) => (
                
                isOpen ? (
                    <div style={{
                        position: 'fixed',
                        top: 60,
                        right: 0,
                        minWidth: 500,
                        background: 'white',
                    }}>
                        <ShoppingCartIcon onClick={toggleShoppingCart}/>
                        {items.length ? (
                            <ul>
                                {items.map(item => (
                                    <li>
                                        <h3>{item.name}</h3>
                                        <p>{item.price} SEK</p>
                                    </li>
                                ))}
                            </ul> 
                        ) : null}
                    </div>
                ) : <ShoppingCartIcon onClick={toggleShoppingCart} amount={items.length}/>

            )}
        </Consumer>
    ); 
}