import { useState } from "react";
import "./InputDeliveryCity.scss";

export default function InputDeliveryCity() {
  const [isValid, setIsValid] = useState(true);
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setCity(value);
    // checking that are  entered only letters, spaces and hyphens
    const cityRegex = /^[A-Za-z\s-]*$/;
    setIsValid(cityRegex.test(value));
  };

  return (
    <div className="input-city-container">
      <label htmlFor="input-city">City </label>
      <input
        type="text"
        id="input-city"
        name="city"
        aria-label="city"
        autoComplete="address-level2"
        placeholder="Beverly Hills"
        value={city}
        onChange={handleChange}
        className={!isValid ? "invalid-city" : ""}
        aria-describedby={!isValid ? "invalid-message-city" : ""}
        required
      />
      {/* error text */}
      {!isValid && (
        <div id="invalid-message-city" className="invalid-message-city">
          Please enter a valid city name (letters, spaces, and hyphens only).
        </div>
      )}
    </div>
  );
}
