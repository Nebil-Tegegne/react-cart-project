import React, { useContext } from "react";
import { PRODUCT } from "../../product";
import {ShopContext} from "../../context/shop-context";
import {CartItem} from "./cart-item"
import "./cart.css"
import {useNavigate} from 'react-router-dom'
export const Cart =() =>{
    const {cartItem,  getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate()
    return (
        <div className="cart">
           <div>
            <h1>your cart items</h1>
           </div>
           <div className="cartItems">
            {PRODUCT.map((product) =>{
              if(cartItem[product.id] != 0){
                return <CartItem data = {product}/>
              }
            })}
           </div>
           {totalAmount > 0 ?(
           <div className="checkout">
           
              <p>subtotal: ${totalAmount}</p>
              <button onClick={() => navigate("/")}>Continue Shoping</button>
              <button >Checkout</button>
           </div>
           ): 
           (<h1>your cart is empty</h1>)
           }
        </div>
    );
};