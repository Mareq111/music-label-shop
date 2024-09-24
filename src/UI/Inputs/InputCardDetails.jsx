/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import "./InputCardDetails.scss";

export default function InputCardDetails({
  formValues,
  handleInputChange,
  onValidationChange,
}) {
  const [touched, setTouched] = useState({
    cardNumber: false,
    cardName: false,
    expiryDate: false,
    cvv: false,
  });

  const validateFields = () => {
    const errors = {
      cardNumber: !/^\d{16}$|^\d{4} \d{4} \d{4} \d{4}$/.test(
        formValues.cardNumber
      ),
      cardName: !/^[a-zA-Z\s]+$/.test(formValues.cardName),
      expiryDate: !/^\d{2}\/\d{4}$/.test(formValues.expiryDate),
      cvv: !/^\d{3}$/.test(formValues.cvv),
    };
    onValidationChange(!Object.values(errors).some(Boolean));
    return errors;
  };

  useEffect(() => {
    validateFields();
  }, [formValues]);

  const errors = validateFields();

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  return (
    formValues.paymentMethod === "card" && (
      <div className="card-details">
        <label>
          Card number
          <input
            tabIndex={0}
            type="text"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={handleInputChange}
            onBlur={() => handleBlur("cardNumber")}
            placeholder="1234 1234 1234 1234"
            required
            aria-label="card number"
            autoComplete="card-number"
          />
          {touched.cardNumber && errors.cardNumber && (
            <div className="invalid-message">
              Please enter a valid card number (16 digits, with or without
              spaces).
            </div>
          )}
        </label>
        <label>
          Name on card
          <input
            tabIndex={0}
            type="text"
            name="cardName"
            value={formValues.cardName}
            onChange={handleInputChange}
            onBlur={() => handleBlur("cardName")}
            placeholder="John Kowalsky"
            required
            aria-label="card name"
            autoComplete="card-name"
          />
          {touched.cardName && errors.cardName && (
            <div className="invalid-message">
              Please enter a valid name (letters and spaces only).
            </div>
          )}
        </label>
        <div className="expiry-cvv">
          <label>
            Expiration date (MM / YY)
            <input
              tabIndex={0}
              type="text"
              name="expiryDate"
              value={formValues.expiryDate}
              onChange={handleInputChange}
              onBlur={() => handleBlur("expiryDate")}
              placeholder="02/2028"
              required
              aria-label="expiration date (mm / yy)"
              autoComplete="expiration-date"
            />
            {touched.expiryDate && errors.expiryDate && (
              <div className="invalid-message">
                Please enter a valid expiration date (MM/YY).
              </div>
            )}
          </label>
          <label>
            Security code (CVV)
            <input
              tabIndex={0}
              type="text"
              name="cvv"
              value={formValues.cvv}
              onChange={handleInputChange}
              onBlur={() => handleBlur("cvv")}
              placeholder="123"
              required
              aria-label="security code (cvv)"
              autoComplete="cvv"
            />
            {touched.cvv && errors.cvv && (
              <div className="invalid-message">
                Please enter a valid CVV (3 digits).
              </div>
            )}
          </label>
        </div>
      </div>
    )
  );
}
