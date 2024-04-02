/* eslint-disable react/prop-types */
import "./DialogAddToCart.scss";
export default function DialogAddToCart({ isFill }) {
  return (
    <dialog
      className={`dialog-cart ${
        isFill ? "dialog-cart-fill" : "dialog-cart-empty"
      }`}
    >
      {isFill ? (
        <p className="p-dialog-cart">You add item to the cart!</p>
      ) : (
        <p className="p-dialog-cart" id="p-dialog-cart-red">
          No item was added to the cart.
        </p>
      )}
    </dialog>
  );
}
