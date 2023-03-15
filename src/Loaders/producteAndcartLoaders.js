import { getStoredCart } from "../utilities/fakedb";

export const productsAndcartLoader = async()=>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const saveCart = getStoredCart();

    const previousCart = [];

   for(const id in saveCart){
        const addedProduct = products.find(product => product.id === id);
        
        if(addedProduct){
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
   }
   
    return {products: products, previousCart: previousCart};
}