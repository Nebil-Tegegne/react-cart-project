import React, { createContext,  useState } from "react";
import { PRODUCT } from "../product";
export const ShopContext = createContext(null);
const getDefaultCart =() =>{
    let cart={};
    for( let i = 1; i < PRODUCT.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
};
export const ShopContextProvider=(props) =>{
   
    const [cartItem, setCartItem] =useState(getDefaultCart); 

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItem) {
            if(cartItem[item] > 0){
                let itemInfo = PRODUCT.find((product) => product.id===Number(item)) ;
                totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount;
    };

    const AddToCart = (itemId) =>{
    setCartItem((prev) =>({...prev,[itemId]: prev[itemId] + 1}))
    };
    const RemovFromCart = (itemId) =>{
        setCartItem((prev) =>({...prev,[itemId]: prev[itemId] -1}))
        };
        const updateCartItemAmount = (newAmount, itemId) =>{
            setCartItem((prev) => ({...prev, [itemId]: newAmount}));
        }
        const contextValue ={ 
            cartItem,
            AddToCart,
            RemovFromCart,
            updateCartItemAmount,
            getTotalCartAmount,
        };
    return(
        <ShopContext.Provider value={contextValue}>
              {props.children}
        </ShopContext.Provider>
    );
};