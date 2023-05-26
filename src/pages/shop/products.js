import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { AddToCart, cartItem} = useContext(ShopContext);
  const cartItemAmount = cartItem[id]
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => AddToCart(id)}>
       add to cart {cartItemAmount> 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
