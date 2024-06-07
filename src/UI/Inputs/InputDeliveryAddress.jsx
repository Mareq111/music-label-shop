/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* import { useState } from "react";
import "./InputDeliveryAddress.scss";

export default function InputDeliveryAddress({  onChange }) {
  const [isValid, setIsValid] = useState(true);
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setAddress(value);

    // checking that address  contains at least one digit and one space
    const addressRegex = /^(?=.*\d)(?=.*\s).+$/;
    setIsValid(addressRegex.test(value));
  };

  return (
    <div className="input-address-container">
      <label htmlFor="input-address">Address </label>
      <input
        type="text"
        id="input-address"
        name="address"
        aria-label="address"
        autoComplete="address-line1"
        placeholder="123 Main Street"
        value={address}
        onChange={handleChange}
        className={!isValid ? "invalid-address" : ""}
        aria-describedby={!isValid ? "invalid-message-address" : ""}
        required
      />
      {/* error 
      {!isValid && (
        <div id="invalid-message-address" className="invalid-message-address">
          Address must contain at least one digit and one space.
        </div>
      )}
    </div>
  );
}
 */

import { useState } from "react";
import "./InputDeliveryAddress.scss";

export default function InputDeliveryAddress({ onChange }) {
  const [isValid, setIsValid] = useState(true);
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setAddress(value);

    // checking that address contains at least one digit and one space
    const addressRegex = /^(?=.*\d)(?=.*\s).+$/;
    const isValid = addressRegex.test(value);
    setIsValid(isValid);

    onChange(value, isValid);
  };

  return (
    <div className="input-address-container">
      <label htmlFor="input-address">Address </label>
      <input
        type="text"
        id="input-address"
        name="address"
        aria-label="address"
        autoComplete="address-line1"
        placeholder="123 Main Street"
        value={address}
        onChange={handleChange}
        className={!isValid ? "invalid-address" : ""}
        aria-describedby={!isValid ? "invalid-message-address" : ""}
        required
      />
      {/* error */}
      {!isValid && (
        <div id="invalid-message-address" className="invalid-message-address">
          Address must contain at least one digit and one space.
        </div>
      )}
    </div>
  );
}
