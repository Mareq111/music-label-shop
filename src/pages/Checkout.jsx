/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* import { Link, useLocation } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";
import { useSelector } from "react-redux";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import { useEffect, useState } from "react";
import StepCircle from "./StepCircle";

export default function Checkout() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formDataRedux = useSelector((state) => state.form);
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const formData = location.state || formDataRedux;
    const isValid = Object.values(formData).every((field) => field.isValid);
    setIsFormValid(isValid);
  }, [location.state, formDataRedux]);
  const [completedSteps, setCompletedSteps] = useState([1]);

  return (
    <>
      <div className="backdrop"></div>
      <aside className="aside-cart">
        <BadgeTopOfAsideNav nameOfNavPage={"Checkout"} showCloseButton={true} />
        <hr className="cart-devider-separator" />
        <div className="content-fill-cart">
          <StepCircle stepsCompleted={completedSteps} />
          <AccordionCheckoutCart totalPrice={totalPrice} />
          <FormDeliveryDetails
            formData={location.state || formDataRedux}
            onValidationChange={setIsFormValid}
          />

          <div>
            <Link
              className={`btn-continue-div-wrapper ${
                !isFormValid ? "disabled" : ""
              }`}
              to={isFormValid ? "/payment" : ""}
            >
              <BtnContinue continueBtnText={"Proceed to pay"} />
            </Link>
          </div>
        </div>

        <hr className="cart-devider-separator-smaller" />
        <div className="all-content-of-cart">
          <div className="customer-favorities-cart">
            <CustomerFavoritesCart />
          </div>
        </div>
      </aside>
    </>
  );
}
 */

/* import { Link, useLocation } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";

import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import { useEffect, useState } from "react";
import StepCircle from "./StepCircle";
import { useSelector, useDispatch } from "react-redux";
import { closeCheckout } from "../store/cartSlice"; 

// inne importy

export default function Checkout() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formDataRedux = useSelector((state) => state.form);
  const isCheckoutOpen = useSelector((state) => state.cart.isCheckoutOpen); 
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const formData = location.state || formDataRedux;
    const isValid = Object.values(formData).every((field) => field.isValid);
    setIsFormValid(isValid);
  }, [location.state, formDataRedux]);

  const [completedSteps, setCompletedSteps] = useState([1]);
  console.log("isCheckoutOpen:", isCheckoutOpen);

  if (!isCheckoutOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={() => dispatch(closeCheckout())}></div>{" "}
      {/* Zamknij checkout po kliknięciu w backdrop
      <aside className="aside-cart">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Checkout"}
          showCloseButton={true}
          onClose={() => dispatch(closeCheckout())}
        />
        <hr className="cart-devider-separator" />
        <div className="content-fill-cart">
          <StepCircle stepsCompleted={completedSteps} />
          <AccordionCheckoutCart totalPrice={totalPrice} />
          <FormDeliveryDetails
            formData={location.state || formDataRedux}
            onValidationChange={setIsFormValid}
          />
          <div>
            <Link
              className={`btn-continue-div-wrapper ${
                !isFormValid ? "disabled" : ""
              }`}
              to={isFormValid ? "/payment" : ""}
            >
              <BtnContinue continueBtnText={"Proceed to pay"} />
            </Link>
          </div>
        </div>
        <hr className="cart-devider-separator-smaller" />
        <div className="all-content-of-cart">
          <div className="customer-favorities-cart">
            <CustomerFavoritesCart />
          </div>
        </div>
      </aside>
    </>
  );
} */

/*   import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCheckout } from "../store/cartSlice";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import StepCircle from "./StepCircle";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";

export default function Checkout() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formDataRedux = useSelector((state) => state.form);
  const isCheckoutOpen = useSelector((state) => state.cart.isCheckoutOpen);
  const [isFormValid, setIsFormValid] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([1]);

  useEffect(() => {
    const isValid = Object.values(formDataRedux).every((field) => field.isValid);
    setIsFormValid(isValid);
  }, [formDataRedux]);

  if (!isCheckoutOpen) return null;

  return (
    <>
      {/* close checkout if backdrop was clicked 
      <div className="backdrop" onClick={() => dispatch(closeCheckout())}></div>
      <aside className="aside-cart">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Checkout"}
          showCloseButton={true}
          onClose={() => dispatch(closeCheckout())}
        />
        <hr className="cart-devider-separator" />

        <StepCircle stepsCompleted={completedSteps} />

        <div className="container-delivery-details-checkout">
          <AccordionCheckoutCart title={"Delivery details"}>
            <FormDeliveryDetails />
          </AccordionCheckoutCart>
        </div>
        <div className="all-text-cart">
          <p className="p-text-cart">
            You're almost done. Just complete your delivery details and proceed
            with payment.
          </p>
        </div>
        <h3 className="h-cart">
          Subtotal Price: {totalPrice.toFixed(2)}€
        </h3>

        <div>
          <BtnContinue
            continueBtnText="Proceed to payment"
            onClick={() => {
              if (isFormValid) {
                // Proceed to payment logic here
              } else {
                alert("Please fill in all required fields.");
              }
            }}
          />
        </div>
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

import { Link, useLocation } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Checkout.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";
import { useSelector } from "react-redux";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import { useEffect, useState } from "react";
import StepCircle from "./StepCircle";

export default function Checkout() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formDataRedux = useSelector((state) => state.form);
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const formData = location.state || formDataRedux;
    const isValid = Object.values(formData).every((field) => field.isValid);
    setIsFormValid(isValid);
  }, [location.state, formDataRedux]);
  const [completedSteps, setCompletedSteps] = useState([1]);

  return (
    <>
      <div className="backdrop-checkout"></div>
      <aside className="aside-checkout">
        <BadgeTopOfAsideNav nameOfNavPage={"Checkout"} showCloseButton={true} />
        <hr className="checkout-devider-separator" />
        <div className="content-fill-checkout">
          <StepCircle stepsCompleted={completedSteps} />
          <AccordionCheckoutCart totalPrice={totalPrice} />
          <FormDeliveryDetails
            formData={location.state || formDataRedux}
            onValidationChange={setIsFormValid}
          />

          <div>
            <Link
              className={`btn-continue-div-wrapper ${
                !isFormValid ? "disabled" : ""
              }`}
              to={isFormValid ? "/payment" : ""}
            >
              <BtnContinue continueBtnText={"Proceed to pay"} />
            </Link>
          </div>
        </div>

        <hr className="checkout-devider-separator-smaller" />
        <div className="all-content-of-checkout">
          <div className="customer-favorities-checkout">
            <CustomerFavoritesCart />
          </div>
        </div>
      </aside>
    </>
  );
}

/* import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Checkout.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import StepCircle from "./StepCircle";
import { closeCheckout } from "../store/cartSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formDataRedux = useSelector((state) => state.form);
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();
  const [completedSteps, setCompletedSteps] = useState([1]);

  useEffect(() => {
    const formData = location.state || formDataRedux;
    const isValid = Object.values(formData).every((field) => field.isValid);
    setIsFormValid(isValid);
  }, [location.state, formDataRedux]);

  const handleContinue = () => {
    if (isFormValid) {
      navigate("/payment");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <div
        className="backdrop-checkout"
        onClick={() => dispatch(closeCheckout())}
      ></div>
      <aside className="aside-checkout">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Checkout"}
          showCloseButton={true}
          onClose={() => dispatch(closeCheckout())}
        />
        <hr className="checkout-devider-separator" />
        <div className="content-fill-checkout">
          <StepCircle stepsCompleted={completedSteps} />
          <AccordionCheckoutCart totalPrice={totalPrice} />
          <FormDeliveryDetails
            formData={location.state || formDataRedux}
            onValidationChange={setIsFormValid}
          />
          <div>
            <BtnContinue
              continueBtnText={"Proceed to pay"}
              onClick={handleContinue}
            />
          </div>
        </div>
        <hr className="checkout-devider-separator-smaller" />
        <div className="all-content-of-checkout">
          <div className="customer-favorities-checkout">
            <CustomerFavoritesCart />
          </div>
        </div>
      </aside>
    </>
  );
}
 */
