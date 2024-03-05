/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
export default function BtnAddToCart({ itemPrice }) {
  //state with items quantity
  const [cartItem, setCartItems] = useState(0);
  const handleAddToCart = () => {
    setCartItems(cartItem + 1);
  };
  return (
    <button className="btnAddToCart" type="button" onClick={handleAddToCart}>
      Add to cart <IconCircleFilled /> {itemPrice}€
    </button>
  );
}
