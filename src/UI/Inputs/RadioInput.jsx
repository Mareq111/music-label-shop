import React from "react";
import "./RadioInput.scss";
export default function RadioInput({
  radioLabel,
  radioId,
  radioName,
  radioValue,
  radioAriaLabel,
  radioKey,
}) {
  return (
    <>
      <label>
        <input
          className="radio-input"
          type="radio"
          name="engine"
          id={radioId} 
          value={radioValue}
          aria-label={radioAriaLabel}
          key={radioKey}
        />
        <span className="radio-tile">
          <span className="radio-label">{radioLabel}</span>
        </span>
      </label>
    </>
  );
}
