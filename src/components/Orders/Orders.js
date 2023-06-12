import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviweIteam/ReviewIteam';

const Orders = () => {
const {products, previousCart} = useLoaderData();
const [cart, setCart] = useState(previousCart)
const handleRemoveItem = (id) =>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
}
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product=> <ReviewIteam
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewIteam>)
                }
                {
                    cart.length === 0 && <h2>NO Items For Review, Please Shope<Link to="/">Shop More</Link></h2>
                }
            </div>
            <div className='cart-contanair'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;