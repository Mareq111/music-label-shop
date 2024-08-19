/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { useSelector } from "react-redux";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import AccordionCheckoutDetails from "../UI/Accordions/AccordionCheckoutDetails";
import FormPayment from "../UI/Form/FormPayment";
import BtnContinue from "../UI/Buttons/BtnContinue";
import StepCircle from "./StepCircle";
import "./Payment.scss";

export default function Payment() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [isFormValid, setIsFormValid] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([1, 2]);

  const handleValidationChange = (isValid) => {
    setIsFormValid(isValid);
  };

  return (
    <>
      <div className="backdrop-payment"></div>
      <aside className="aside-payment">
        <BadgeTopOfAsideNav nameOfNavPage={"Payment"} showCloseButton={true} />

        <hr className="payment-devider-separator" />
        <div className="content-fill-payment">
          <StepCircle stepsCompleted={completedSteps} />
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
              <BtnContinue continueBtnText={"Pay now"} />
            </Link>
          </div>
        </div>

        <hr className="payment-devider-separator-smaller" />
        <div className="all-content-of-payment">
          <div className="payment-disclaimer">
            <p className="p-text-payment-disclaimer">
              This page is part of a portfolio project. Please remember that it
              is not a real transaction.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
