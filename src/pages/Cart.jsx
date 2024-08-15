/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

/* import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "../store/cartSlice.js";
import StepCircle from "./StepCircle.jsx";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const isEmptyCart = products.length === 0;

  return (
    <>
      <div className="backdrop"></div>

      <aside className="aside-cart">
        <BadgeTopOfAsideNav nameOfNavPage={"Cart"} showCloseButton={true} />
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
            <StepCircle stepsCompleted={completedSteps} />

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
            <CustomerFavoritesCart titleCard={'Customer favorites'} />
          </div>
        </div>
      </aside>
    </>
  );
} */

/* import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  closeCart,
} from "../store/cartSlice.js";
import StepCircle from "./StepCircle.jsx";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  if (!isCartOpen) return null;

  const isEmptyCart = products.length === 0;

  return (
    <>
      <div className="backdrop" onClick={() => dispatch(closeCart())}></div>
      <aside className="aside-cart">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Cart"}
          showCloseButton={true}
          onClose={() => dispatch(closeCart())}
        />
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
            <StepCircle stepsCompleted={completedSteps} />

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
            <CustomerFavoritesCart titleCard={"Customer favorites"} />
          </div>
        </div>
      </aside>
    </>
  );
}
 */

/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  closeCart,
  updateItemQuantity,
  removeItemFromCart,
  toggleCheckout,
} from "../store/cartSlice";
import StepCircle from "./StepCircle.jsx";

export default function Cart() {
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [completedSteps, setCompletedSteps] = React.useState([0]);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  if (!isCartOpen) return null;

  const isEmptyCart = products.length === 0;

  return (
    <>
      {/* close cart if  backdrop was clicked 
      <div className="backdrop" onClick={() => dispatch(closeCart())}></div>
      <aside className="aside-cart">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Cart"}
          showCloseButton={true}
          onClose={() => dispatch(closeCart())}
        />
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
            <StepCircle stepsCompleted={completedSteps} />

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
              <BtnContinue continueBtnText={"Continue to checkout"} /> *
               <BtnContinue
                continueBtnText="Continue to checkout"
                onClick={() => {
                  dispatch(closeCart());
                  dispatch(toggleCheckout());
                }}
              /> 
              <BtnContinue
                continueBtnText="Proceed to checkout"
                onClick={() => {
                  dispatch(closeCart());
                  dispatch(toggleCheckout());
                }}
            
              />
            </div>
          </div>
        )}

        <hr className="cart-devider-separator-smaller" />
        <div className="all-content-of-cart">
          <div className="customer-favorities-cart">
            <CustomerFavoritesCart titleCard={"Customer favorites"} />
          </div>
        </div>
      </aside>
    </>
  );
} */

/*  import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  closeCart,
  updateItemQuantity,
  removeItemFromCart,
  openCheckout,
} from "../store/cartSlice";
import StepCircle from "./StepCircle.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [completedSteps, setCompletedSteps] = React.useState([0]);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleProceedToCheckout = () => {
    dispatch(closeCart());
    setTimeout(() => {
      dispatch(openCheckout());
    }, 
  };

  if (!isCartOpen) return null;

  const isEmptyCart = products.length === 0;

  return (
    <>
   
      <div className="backdrop" onClick={() => dispatch(closeCart())}></div>
      <aside className="aside-cart">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Cart"}
          showCloseButton={true}
          onClose={() => dispatch(closeCart())}
        />
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
            <StepCircle stepsCompleted={completedSteps} />

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
              <BtnContinue
                continueBtnText="Proceed to checkout"
                onClick={handleProceedToCheckout}
              />
            </div>
          </div>
        )}

        <hr className="cart-devider-separator-smaller" />
        <div className="all-content-of-cart">
          <div className="customer-favorities-cart">
            <CustomerFavoritesCart titleCard={"Customer favorites"} />
          </div>
        </div>
      </aside>
    </>
  );
}
 */
import "./Cart.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  closeCart,
  updateItemQuantity,
  removeItemFromCart,
  openCheckout,
} from "../store/cartSlice";
import StepCircle from "./StepCircle.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isCheckoutOpen = useSelector((state) => state.cart.isCheckoutOpen); // For debugging
  const [completedSteps, setCompletedSteps] = React.useState([0]);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  /*   const handleProceedToCheckout = () => {
    console.log("Closing cart and opening checkout..."); 
    dispatch(closeCart());
    setTimeout(() => {
      console.log("Checkout should be open now."); 
      dispatch(openCheckout());
    }, 300); 
  }; */
  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout...");
    dispatch(openCheckout()); // Otwórz checkout
    dispatch(closeCart()); // Zamknij koszyk
  };

  if (!isCartOpen) return null;

  const isEmptyCart = products.length === 0;

  return (
    <>
      <div className="backdrop-cartNew" onClick={() => dispatch(closeCart())}></div>
      <aside className="aside-cartNew">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Cart"}
          showCloseButton={true}
          onClose={() => dispatch(closeCart())}
        />
        <hr className="cartNew-devider-separator" />

        {isEmptyCart ? (
          <div className="content-empty-cartNew">
            <div className="all-text-cartNew">
              <p className="p-text-cartNew">
                It looks like you're starting with a clean slate.
              </p>
              <h3 className="h-cartNew">Let's explore!</h3>
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
          <div className="content-fill-cartNew">
            <StepCircle stepsCompleted={completedSteps} />

            <ul className="ul-product-list-cartNew">
              {products.map((product) => (
                <li key={`${product.itemId}__${product.selectedVersion}`}>
                  <CardProductIntoCart
                    product={product}
                    onQuantityChange={(newQuantity) =>
                      handleQuantityChange(product.itemId, newQuantity)
                    }
                    onRemoveProduct={() => handleRemoveProduct(product.itemId)}
                  />
                  <hr className="cartNew-devider-separator-smaller" />
                </li>
              ))}
            </ul>
            <div className="all-text-cartNew">
              <p className="p-text-cartNew">
                Your cart contains {cartQuantity}{" "}
                {cartQuantity === 1 ? "item" : "items"}.
              </p>
            </div>
            <h3 className="h-cartNew">
              Subtotal Price : {totalPrice.toFixed(2)}€
            </h3>

            {/*    <div>
              <BtnContinue
                continueBtnText="Proceed to checkout"
                onClick={handleProceedToCheckout}
              />
            </div> */}
            <div>
              <Link className="btn-continue-div-wrapper" to={"/checkout"}>
                <BtnContinue continueBtnText={"Continue to checkout"} />
              </Link>
            </div>
          </div>
        )}

        <hr className="cartNew-devider-separator-smaller" />
        <div className="all-content-of-cartNew">
          <div className="customer-favorities-cartNew">
            <CustomerFavoritesCart titleCard={"Customer favorites"} />
          </div>
        </div>
      </aside>
    </>
  );
}
