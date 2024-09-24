/* eslint-disable react/prop-types */

/* import { useState } from "react";
import "./RadioDeliveryOptions.scss";

export default function RadioDeliveryOptions({
  onOptionChange,
  deliveryOptions,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = deliveryOptions.find(
      (option) => option.id === selectedValue
    );
    setSelectedOption(selectedOption);
    onOptionChange(selectedOption);
  };

  return (
    <div className="delivery-options">
      <div className="options-list">
        {deliveryOptions.map((option) => (
          <div
            key={option.id}
            className={`radio-tile-delivery ${
              selectedOption?.id === option.id ? "selected" : ""
            }`}
          >
            <input
              tabIndex={0}
              required
              className="radio-input-delivery"
              type="radio"
              id={`option-${option.id}`}
              name="deliveryOption"
              value={option.id}
              checked={selectedOption?.id === option.id}
              onChange={handleOptionChange}
            />
            <label
              className="radio-label-delivery"
              htmlFor={`option-${option.id}`}
            >
              <p className="delivery-name">{option.carrier}</p>
              <p className="delivery-info">
                {option.deliveryTime} days - {option.price}€
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
 */



import { useState } from "react";
import "./RadioDeliveryOptions.scss";

export default function RadioDeliveryOptions({
  onOptionChange,
  deliveryOptions,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = deliveryOptions.find(
      (option) => option.id === selectedValue
    );
    setSelectedOption(selectedOption);
    onOptionChange(selectedOption);
  };

  // Dodaj obsługę Enter
  const handleKeyDown = (event, optionId) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Zapobiegamy domyślnemu działaniu
      const selectedOption = deliveryOptions.find(
        (option) => option.id === optionId
      );
      setSelectedOption(selectedOption);
      onOptionChange(selectedOption);
    }
  };

  return (
    <div className="delivery-options">
      <div className="options-list">
        {deliveryOptions.map((option) => (
          <div
            key={option.id}
            className={`radio-tile-delivery ${
              selectedOption?.id === option.id ? "selected" : ""
            }`}
            tabIndex={0} // Umożliwienie nawigacji przez div za pomocą Tab
            onKeyDown={(event) => handleKeyDown(event, option.id)} // Obsługa Enter
            onClick={() => {
              setSelectedOption(option);
              onOptionChange(option);
            }} // Obsługa kliknięcia
          >
            <input
              required
              className="radio-input-delivery"
              type="radio"
              id={`option-${option.id}`}
              name="deliveryOption"
              value={option.id}
              checked={selectedOption?.id === option.id}
              onChange={handleOptionChange}
            />
            <label
              className="radio-label-delivery"
              htmlFor={`option-${option.id}`}
            >
              <p className="delivery-name">{option.carrier}</p>
              <p className="delivery-info">
                {option.deliveryTime} days - {option.price}€
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
