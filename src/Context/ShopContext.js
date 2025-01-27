import { createContext, useState } from "react";
import allProduct from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = ( )=>{
    let cart = {}
    for(let index = 0;index < allProduct.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] =useState(getDefaultCart())
    console.log(cartItems)
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartsAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            if(cartItems[items]>0)
            {
                let itemInfo = allProduct.find((product)=>product.id===Number(items))
                totalAmount+=itemInfo.new_price * cartItems[items]
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item]
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems, allProduct,cartItems,addToCart,removeFromCart,getTotalCartsAmount };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
