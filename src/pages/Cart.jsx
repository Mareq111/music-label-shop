/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { addItemToCart, removeItemFromCart } from "../store/cartSlice.js";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleQuantityChange = (productId, newQuantity) => {
    // Dispatch action to update quantity
    // For simplicity, assuming you have a separate action for updating quantity
  };

  const handleRemoveProduct = (productId) => {
    // dispatch action to remove product from cart
    dispatch(removeItemFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.priceItem * product.quantity;
    }, 0);
  };

  //if products array is empty  show message that the cart is empty else show filled cart
  const isEmptyCart = products.length === 0;

  // Function to add item to cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />

       Conditional rendering based on isEmptyCart state 
      {isEmptyCart ? (
        <div className="content-empty-cart">
          <div className="all-text-cart">
            <p className="p-text-cart">
              It looks like you're starting with a clean slate.
            </p>
            <h3 className="h-cart">Let's explore!</h3>
          </div>

          <div>
            <Link
              className="btn-continue-div-wrapper"
              to={".."}
              relative="path"
            >
              <BtnContinue continueBtnText={"Continue Shopping"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-cart">
          <ul className="ul-product-list-cart">
            {products.map((product) => (
              <li key={`${product.name}__${product.version}`}>
                <CardProductIntoCart
                  product={product}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(product.itemId, newQuantity)
                  }
                  onRemoveProduct={() => handleRemoveProduct(product.itemId)}
                  onAddToCart={(item) => handleAddToCart(item)}
                  productId={product.key}
                  productPrice={product.productPrice}
                  title={
                    product.titleArtist ||
                    product.location ||
                    product.color ||
                    product.itemTitle ||
                    product.itemLevel
                  }
                  titleItem={product.titleItem}
                />

                <hr className="cart-devider-separator-smaller" />
              </li>
            ))}
          </ul>
          <div className="all-text-cart">
            <p className="p-text-cart">
              Your cart contains {cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "items"}.
            </p>
          </div>
          <h3 className="h-cart">
            Subtotal Price : {calculateTotalPrice().toFixed(2)}€
          </h3>

          <div>
            <Link className="btn-continue-div-wrapper" to={"/checkout"}>
              <BtnContinue continueBtnText={"Continue to checkout"} />
            </Link>
          </div>
        </div>
      )}

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}
 */


/* 
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { addItemToCart, removeItemFromCart, updateItemQuantity } from "../store/cartSlice.js";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const isEmptyCart = products.length === 0;

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />

      {isEmptyCart ? (
        <div className="content-empty-cart">
          <div className="all-text-cart">
            <p className="p-text-cart">
              It looks like you're starting with a clean slate.
            </p>
            <h3 className="h-cart">Let's explore!</h3>
          </div>

          <div>
            <Link className="btn-continue-div-wrapper" to={".."} relative="path">
              <BtnContinue continueBtnText={"Continue Shopping"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-cart">
          <ul className="ul-product-list-cart">
            {products.map((product) => (
              <li key={`${product.itemId}__${product.selectedVersion}`}>
                <CardProductIntoCart
                  product={product}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(product.itemId, newQuantity)
                  }
                  onRemoveProduct={() => handleRemoveProduct(product.itemId)}
                  onAddToCart={(item) => handleAddToCart(item)}
                />
                <hr className="cart-devider-separator-smaller" />
              </li>
            ))}
          </ul>
          <div className="all-text-cart">
            <p className="p-text-cart">
              Your cart contains {cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "items"}.
            </p>
          </div>
          <h3 className="h-cart">
            Subtotal Price : {totalPrice.toFixed(2)}€
          </h3>

          <div>
            <Link className="btn-continue-div-wrapper" to={"/checkout"}>
              <BtnContinue continueBtnText={"Continue to checkout"} />
            </Link>
          </div>
        </div>
      )}

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
} */


import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { addItemToCart, removeItemFromCart, updateItemQuantity } from "../store/cartSlice.js";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const isEmptyCart = products.length === 0;

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />

      {isEmptyCart ? (
        <div className="content-empty-cart">
          <div className="all-text-cart">
            <p className="p-text-cart">
              It looks like you're starting with a clean slate.
            </p>
            <h3 className="h-cart">Let's explore!</h3>
          </div>

          <div>
            <Link className="btn-continue-div-wrapper" to={".."} relative="path">
              <BtnContinue continueBtnText={"Continue Shopping"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-cart">
          <ul className="ul-product-list-cart">
            {products.map((product) => (
              <li key={`${product.itemId}__${product.selectedVersion}`}>
                <CardProductIntoCart
                  product={product}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(product.itemId, newQuantity)
                  }
                  onRemoveProduct={() => handleRemoveProduct(product.itemId)}
                />
                <hr className="cart-devider-separator-smaller" />
              </li>
            ))}
          </ul>
          <div className="all-text-cart">
            <p className="p-text-cart">
              Your cart contains {cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "items"}.
            </p>
          </div>
          <h3 className="h-cart">
            Subtotal Price : {totalPrice.toFixed(2)}€
          </h3>

          <div>
            <Link className="btn-continue-div-wrapper" to={"/checkout"}>
              <BtnContinue continueBtnText={"Continue to checkout"} />
            </Link>
          </div>
        </div>
      )}

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}
