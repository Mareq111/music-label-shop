

import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { useSelector } from "react-redux";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import AccordionCheckoutDetails from "../UI/Accordions/AccordionCheckoutDetails";
import FormPayment from "../UI/Form/FormPayment";
import BtnContinue from "../UI/Buttons/BtnContinue";

export default function Payment() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleValidationChange = (isValid) => {
    setIsFormValid(isValid);
  };

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Payment"} showCloseButton={true} />

      <hr className="cart-devider-separator" />
      <div className="content-fill-cart">
        <h1>Cart / Information / PAYMENT</h1>

        <AccordionCheckoutCart totalPrice={totalPrice} />
        <AccordionCheckoutDetails />

        <FormPayment onValidationChange={handleValidationChange} />

        <div className="btn-continue-div-wrapper">
          <Link
            className={`btn-continue-div-wrapper ${
              !isFormValid ? "disabled" : ""
            }`}
            to={isFormValid ? "/payment-greetings" : ""}
          >
            <BtnContinue continueBtnText={"Proceed to pay"} />
          </Link>
        </div>
      </div>

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="payment-disclaimer">
          <p className="p-text-cart-disclaimer">
            This page is part of a portfolio project. Please remember that it is
            not a real transaction.
          </p>
        </div>
      </div>
    </aside>
  );
}
