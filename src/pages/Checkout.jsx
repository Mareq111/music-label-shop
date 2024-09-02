/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

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

