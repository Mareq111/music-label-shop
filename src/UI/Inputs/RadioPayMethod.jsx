/* eslint-disable react/prop-types */

/* import "./RadioPayMethod.scss";

export default function RadioPayMethod({
  onOptionChange,
  paymentMethods,
  selectedOption,
}) {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = paymentMethods.find(
      (option) => option.id === selectedValue
    );
    onOptionChange(selectedOption);
  };

  return (
    <div className="payment-options">
      <div className="options-list-payment">
        {paymentMethods.map((option) => (
          <div
            key={option.id}
            className={`radio-tile-payment ${
              selectedOption === option.id ? "selected" : ""
            }`}
          >
            <input
              tabIndex={0}
              required
              className="radio-input-payment"
              type="radio"
              id={`option-${option.id}`}
              name="paymentMethod"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
            />
            <label
              className="radio-label-payment"
              htmlFor={`option-${option.id}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
} */

import "./RadioPayMethod.scss";

export default function RadioPayMethod({
  onOptionChange,
  paymentMethods,
  selectedOption,
}) {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = paymentMethods.find(
      (option) => option.id === selectedValue
    );
    onOptionChange(selectedOption);
  };

  const handleKeyDown = (event, option) => {
    if (event.key === "Enter") {
      onOptionChange(option);
    }
  };

  return (
    <div className="payment-options">
      <div className="options-list-payment">
        {paymentMethods.map((option) => (
          <div
            key={option.id}
            className={`radio-tile-payment ${
              selectedOption === option.id ? "selected" : ""
            }`}
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, option)}
            onClick={() => onOptionChange(option)}
          >
            <input
              required
              className="radio-input-payment"
              type="radio"
              id={`option-${option.id}`}
              name="paymentMethod"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
            />
            <label
              className="radio-label-payment"
              htmlFor={`option-${option.id}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
