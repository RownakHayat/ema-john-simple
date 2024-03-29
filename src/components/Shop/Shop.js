import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
        const addProduct = products.find(product=> product.id === id);
        if(addProduct){
            const quantity =storedCart[id];
            addProduct.quantity =quantity;
            saveCart.push(addProduct);
        }
        }
       setCart(saveCart);

    },[products]);


    const handleAddToCart =(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product=> product.id === selectedProduct.id);
        
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selectedProduct];
        setCart(newCart); 
        addToDb(selectedProduct.id)
       
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-contanair">
                <Cart clearCart={clearCart} cart={cart}>
                <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;