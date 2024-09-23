/* eslint-disable react/prop-types */
/* 
import "./RadioInput.scss";
export default function RadioInput({
  radioLabel,
  radioId,
  radioValue,
  radioAriaLabel,
  radioKey,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <>
      <label className="focus-label-input-tile">
        <input
          className="radio-input"
          type="radio"
          name="engine"
          id={radioId}
          value={`${radioValue} version`}
          aria-label={radioAriaLabel}
          key={radioKey}
          onChange={handleChange}
        />
        <span className="radio-tile">
          <span tabIndex={0} className="radio-label ">
            {radioLabel}
          </span>
        </span>
      </label>
    </>
  );
}
 */

import "./RadioInput.scss";
import { useRef } from "react";

export default function RadioInput({
  radioLabel,
  radioId,
  radioValue,
  radioAriaLabel,
  radioKey,
  onChange,
  isChecked,
}) {
  const radioRef = useRef(null);

  const handleChange = (event) => {
    onChange(event);
  };

  //Focus handling with Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //SIMULATE CLICK on input
      radioRef.current.click();
    }
  };

  return (
    <label className="focus-label-input-tile" htmlFor={radioId}>
      <input
        ref={radioRef}
        className="radio-input"
        type="radio"
        name="engine"
        id={radioId}
        value={`${radioValue} version`}
        aria-label={radioAriaLabel}
        key={radioKey}
        onChange={handleChange}
        checked={isChecked}
      />
      <span className="radio-tile" tabIndex={0} onKeyDown={handleKeyDown}>
        <span className="radio-label">{radioLabel}</span>
      </span>
    </label>
  );
}
