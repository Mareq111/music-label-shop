import React from "react";
import "./DropDownSelect.scss";
export default function DropDownSelect({ radioOptions }) {
  return (
    <div className="open-dropdown">
      <div className="div-label-input-dropdown">
        {radioOptions.map((option) => (
          <label key={option.radioId}>
            <input
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
}
