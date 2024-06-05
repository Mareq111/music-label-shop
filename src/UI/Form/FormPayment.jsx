/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./FormPayment.scss";
import RadioPayMethod from "../Inputs/RadioPayMethod";
import BadgeIconsPayment from "../Badge/BadgeIconsPayment";

export default function FormPayment() {
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
          <div className="card-details">
            <label>
              Card number
              <input
                type="text"
                name="cardNumber"
                value={formValues.cardNumber}
                onChange={handleInputChange}
                placeholder="Card number"
              />
            </label>
            <label>
              Name on card
              <input
                type="text"
                name="cardName"
                value={formValues.cardName}
                onChange={handleInputChange}
                placeholder="Name on card"
              />
            </label>
            <div className="expiry-cvv">
              <label>
                Expiration date (MM / YY)
                <input
                  type="text"
                  name="expiryDate"
                  value={formValues.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM / YY"
                />
              </label>
              <label>
                Security code
                <input
                  type="text"
                  name="cvv"
                  value={formValues.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                />
              </label>
            </div>
          </div>
        )}{" "}
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
