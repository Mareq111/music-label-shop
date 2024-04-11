/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./InputDeliveryPhoneNumber.scss";

export default function InputDeliveryPhoneNumber() {
  const [isValid, setIsValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    //checking that are only digits, spaces and '+', '-', '(' and ')' in the input field 
    const phoneRegex = /^[0-9\s()+-]*$/;
    setIsValid(phoneRegex.test(value)); 
  };

  return (
    <div className="input-phone-number-container">
      <label htmlFor="input-phone-number">Phone number </label>
      <input
        type="tel"
        id="input-phone-number"
        name="phone-number"
        autoComplete="tel"
        placeholder="Example: 546 099 889"
        value={phoneNumber}
        onChange={handleChange}
        className={!isValid ? "invalid-phone-number" : ""}
        aria-describedby={!isValid ? "invalid-message-phone-number" : ""}
      />
      {/* error text */}
      {!isValid && (
        <div id="invalid-message-phone-number" className="invalid-message-phone-number">
           Please enter a valid phone number. You can use digits, spaces, '+', '-', '(', and ')'.
        </div>
      )} 
    </div>
  );
}
