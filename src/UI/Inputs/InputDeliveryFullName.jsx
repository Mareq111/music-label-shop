import { useState } from "react";
import "./InputDeliveryFullName.scss";

export default function InputDeliveryFullName() {
  const [isValid, setIsValid] = useState(true);
  const [fullName, setFullName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setFullName(value);
    //checking that are letters and space only in input  field
    const nameRegex = /^[A-Za-z\s]*$/;
    setIsValid(nameRegex.test(value));
  };

  return (
    <div className="input-fullname-container">
      <label title="Full name required" htmlFor="input-fullname">
        Full name 
      </label>
      <input
        required
        type="text"
        id="input-fullname"
        name="full-name"
        autoComplete="on"
        aria-label="full name"
        placeholder="John Kowalsky"
        value={fullName}
        onChange={handleChange}
        className={!isValid ? "invalid-full-name" : ""}
        aria-describedby={!isValid ? "invalid-message-full-name" : ""}
      />
      {/* error text */}
      {!isValid && (
        <div id="invalid-message-full-name" className="invalid-message-full-name">
          Please enter a valid full name (letters and space only).
        </div>
      )}
    </div>
  );
}
