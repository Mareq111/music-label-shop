/* eslint-disable react/prop-types */

import "./InputPassword.scss";
import { useState } from "react";

export default function InputPassword({ value, onChange }) {
  const [isValid, setIsValid] = useState(true);
  // Password should be at least 6 characters
  const handleChange = (event) => {
    const value = event.target.value;
    setIsValid(value.length >= 6);
    onChange(value, value.length >= 6);
  };

  return (
    <div className="input-password-container">
      <label title="Password required" htmlFor="input-password">
        Password
      </label>
      <input
        required
        type="password"
        id="input-password"
        name="password"
        autoComplete="on"
        aria-label="password"
        placeholder="********"
        value={value}
        onChange={handleChange}
        className={!isValid ? "invalid-password" : ""}
        aria-describedby={!isValid ? "invalid-message-password" : ""}
      />
      {/* error text */}
      {!isValid && (
        <div id="invalid-message-password" className="invalid-message-password">
          Please enter a valid password (at least 6 characters).
        </div>
      )}
    </div>
  );
}
