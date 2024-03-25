/* eslint-disable react/prop-types */
import IconCart from "../Icons/IconCart";
import "./BtnIconCartMenu.scss";
export default function BtnIconCartMenu({ itemCount }) {
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
