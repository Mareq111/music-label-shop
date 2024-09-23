/* eslint-disable react/prop-types */

/* import "./DropDownSelect.scss";
export default function DropDownSelect({ radioOptions }) {
  return (
    <div className="open-dropdown">
      <div className="div-label-input-dropdown">
        {radioOptions.map((option) => (
          <label key={option.radioId}> 
            <input tabIndex={0}
              className="radio-input-dropdown"
              type="radio"
              name="engine"
              id={option.radioId}
              value={option.radioValue}
              aria-label={option.radioAriaLabel}
              key={option.radioKey}
            />
            <span className="radio-tile-dropdown">
              <span className="radio-label-dropdown">{option.radioLabel}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
} */
import { useState } from "react";
import "./DropDownSelect.scss";

export default function DropDownSelect({ radioOptions }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleKeyDown = (event, option) => {
    if (event.key === "Enter") {
      handleOptionChange(option);
      // Dodatkowo możesz zablokować domyślne zachowanie, jeśli jest to potrzebne
      event.preventDefault();
    }
  };

  return (
    <div className="open-dropdown">
      <div className="div-label-input-dropdown">
        {radioOptions.map((option) => (
          <label key={option.radioId}>
            <input
              tabIndex={0}
              className="radio-input-dropdown"
              type="radio"
              name="engine"
              id={option.radioId}
              value={option.radioValue}
              aria-label={option.radioAriaLabel}
              checked={selectedOption?.radioId === option.radioId}
              onChange={() => handleOptionChange(option)}
            />
            <span
              className="radio-tile-dropdown"
              onKeyDown={(event) => handleKeyDown(event, option)}
              tabIndex={0}
            >
              <span className="radio-label-dropdown">{option.radioLabel}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
