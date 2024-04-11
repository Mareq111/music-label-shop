
/* import "./InputDeliveryZipCode.scss";

export default function InputDeliveryZipCode() {
  return (
    <div className="input-zip-code-container">
      <label htmlFor="input-zip-code">Zip Code</label>
      <input
        type="text"
        id="input-zip-code"
        name="zip-code"
        aria-label="zip code"
        autoComplete="postal-code"
        placeholder="90035"
        aria-describedby="zipCodeHelp"
        required
      />
  
    </div>
  );
} */
import { useState } from "react";
import "./InputDeliveryZipCode.scss";

export default function InputDeliveryZipCode() {
  const [isValid, setIsValid] = useState(true);
  const [zipCode, setZipCode] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setZipCode(value);
    //checking that  the zip code contains only digits, spaces and dashes
    const zipCodeRegex = /^[0-9\s-]*$/;
    setIsValid(zipCodeRegex.test(value)); 
  };

  return (
    <div className="input-zip-code-container">
      <label htmlFor="input-zip-code">Zip Code *</label>
      <input
        type="text"
        id="input-zip-code"
        name="zip-code"
        aria-label="zip code"
        autoComplete="postal-code"
        placeholder="90035"
        value={zipCode}
        onChange={handleChange}
        className={!isValid ? "invalid-zip-code" : ""}
        aria-describedby={!isValid ? "invalid-message-zip-code" : ""}
      />
      {/* Error text */}
      {!isValid && (
        <div id="invalid-message-zip-code" className="invalid-message-zip-code">
          Please enter a valid zip code (e.g., 12345 or 12345-6789).
        </div>
      )}
    </div>
  );
}

