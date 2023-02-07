import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        console.log('befoe fatch')
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> 
            setProducts(data))
            
    },[]);

    useEffect(()=>{
        // console.log('first line', products)
        const storedCart = getStoredCart();
       
        const saveCart = [];

        for(const id in storedCart){
            
        const addProduct = products.find(product=> product.id ===id);
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
        const exists = cart.find(product=> product.id === selectedProduct);
        let newCart = [];
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
                {/* <h3>This is products:{products.length}</h3> */}
                {
                    products.map(product=><Product key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-contanair">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;