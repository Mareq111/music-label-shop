/* eslint-disable react/prop-types */

import "./RadioInput.scss";
export default function RadioInput({
  radioLabel,
  radioId,
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
