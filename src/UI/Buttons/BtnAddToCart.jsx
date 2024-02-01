import React, { useState } from "react";
import "./BtnAddToCart.scss";
export default function BtnAddToCart({ initialPrice }) {
  //state with items quantity
  const [cartItem, setCartItems] = useState(0);
  const handleAddToCart = () => {
    setCartItems(cartItem + 1);
  };
  const price = initialPrice;

  return (
    <button className="btnAddToCart" type="button" onClick={handleAddToCart}>
      Add to cart {price}€
    </button>
  );
}
