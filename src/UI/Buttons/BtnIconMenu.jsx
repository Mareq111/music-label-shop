import IconMenu from "../Icons/IconMenu";
import "./BtnIconMenu.scss";

export default function BtnIconMenu() {
  return (
    <button
      title="Cart"
      className="btn-cart-menu"
      type="button"
      aria-label="Go to cart"
    >
      <IconMenu />
    </button>
  );
}
