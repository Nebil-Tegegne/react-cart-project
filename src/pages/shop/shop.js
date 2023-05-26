import React from "react";
import {PRODUCT} from "../../product"
import {Products} from "./products"
import "./shop.css"

export const Shop =()=>{
    return (
        <div className="shop">
           <div className="shopTitle">
            <h1>NebaTech Shop</h1>
           </div>
           <div className="products">
              {PRODUCT.map((product) =>{
                return <Products data={product}/>
              })}
           </div>
        </div>
    )
}