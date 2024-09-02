/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputDeliveryEmail.scss";

export default function InputDeliveryEmail({ onChange }) {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    // checking if entered value is a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setIsValid(isValid);
    onChange(value, isValid);
  };

  return (
    <div className="input-email-container">
      <label htmlFor="input-email">Email address</label>
      <input
        type="email"
        id="input-email"
        name="email"
        aria-label="email"
        autoComplete="email"
        placeholder="example@example.com"
        value={email}
        onChange={handleChange}
        className={!isValid ? "invalid-email" : ""}
        aria-describedby={!isValid ? "emailHelp" : ""}
        required
      />
      {/* error text */}
      {!isValid && (
        <div id="emailHelp" className="email-help">
          Please enter a valid email address.
        </div>
      )}
    </div>
  );
}
