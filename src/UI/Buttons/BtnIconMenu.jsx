/* eslint-disable react/prop-types */
import IconMenu from "../Icons/IconMenu";
import "./BtnIconMenu.scss";

export default function BtnIconMenu({ onClick }) {
  return (
    <button
      title="Cart"
      className="btn-cart-menu"
      type="button"
      aria-label="Go to cart"
      onClick={onClick}
    >
      <IconMenu />
    </button>
  );
}
