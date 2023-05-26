import React,{useContext} from "react";
import {ShopContext} from "../../context/shop-context"


export const CartItem = (props) =>{
   const { id, productName, price, productImage } = props.data;
   const {cartItem, AddToCart, RemovFromCart, updateCartItemAmount } = useContext(ShopContext);
    return(
        <div className="cartItem">
           <img src= {productImage} />
           <div className="description">
            <p>
               <b>{productName}</b>
            </p>
            <p>${price}</p>

            <div className="countHandler ">
                <button onClick={() => RemovFromCart(id)}> -</button>
                <input value={cartItem[id]} onChange  ={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
                <button onClick={() => AddToCart(id)}> + </button>
            </div>
           </div>
        </div>
    );
};