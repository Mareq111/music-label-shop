/* eslint-disable react/prop-types */

import IconCart from "../Icons/IconCart";
import "./BtnIconCartMenu.scss";

import { useSelector } from "react-redux";

export default function BtnIconCartMenu() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      title="Cart"
      className="btn-cart-menu"
      type="button"
      aria-label="Go to cart"
    >
      <IconCart />
      {itemCount > 0 && <span className="badge-cart-count">{itemCount}</span>}
    </button>
  );
}
