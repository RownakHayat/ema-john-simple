import React from 'react';

import './Cart.css'
const Cart = (props) => {
    const {cart, clearCart, children} = props;

    // console.log(cart);
    let total =0;
    let shipping = 0;
    let quantity = 0; 
    for(const product of cart){
        quantity = quantity + product.quantity ;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
     const tax =parseFloat((total * 10 / 100).toFixed(2)); 
     /*0.1 */
     const grandTotal = total + shipping+ tax;
    return (
        <div className='cart'>
            <h4>Order Summury </h4>
            <p>Select Iteam: {quantity}</p>  
            {/* cart.length  */}

            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand total: ${grandTotal.toFixed(2)}</h5>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
     
    );
};

export default Cart;