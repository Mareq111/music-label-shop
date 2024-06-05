/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import "./FormPayment.scss";
import RadioPayMethod from "../Inputs/RadioPayMethod";
import BadgeIconsPayment from "../Badge/BadgeIconsPayment";
import InputCardDetails from "../Inputs/InputCardDetails";

export default function FormPayment({ onValidationChange }) {
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "",
  });

  const paymentMethods = [
    { id: "card", label: "Debit or Credit Card" },
    { id: "paypal", label: "PayPal" },
  ];

  const handleOptionChange = (selectedOption) => {
    setFormValues({
      ...formValues,
      paymentMethod: selectedOption.id,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleValidationChange = (isValid) => {
    onValidationChange(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formValues);
  };

  return (
    <form className="form-payment-details" onSubmit={handleSubmit}>
      <fieldset className="fieldset-form--payment-details">
        <div className="legend-badge-payment">
          <legend className="legend-payment-details">Payment</legend>
          <BadgeIconsPayment />
        </div>
        <p className="payment-description">
          All transactions are secure and encrypted.
        </p>
        <RadioPayMethod
          paymentMethods={paymentMethods}
          onOptionChange={handleOptionChange}
          selectedOption={formValues.paymentMethod}
        />
        {formValues.paymentMethod === "card" && (
          <InputCardDetails 
            formValues={formValues} 
            handleInputChange={handleInputChange} 
            onValidationChange={handleValidationChange} 
          />
        )}
        {formValues.paymentMethod === "paypal" && (
          <div className="card-details">
            <p>
              After clicking "Pay now" button, you will be redirected to PayPal
              to complete your purchase securely.
            </p>
          </div>
        )}
      </fieldset>
    </form>
  );
}
