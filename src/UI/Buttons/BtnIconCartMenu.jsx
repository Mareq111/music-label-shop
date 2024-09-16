
import { useDispatch, useSelector } from "react-redux";
import IconCart from "../Icons/IconCart";
import "./BtnIconCartMenu.scss";
import { toggleCart } from "../../store/cartSlice.js";

export default function BtnIconCartMenu() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={() => dispatch(toggleCart())}
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
