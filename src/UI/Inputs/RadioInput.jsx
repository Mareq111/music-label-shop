/* eslint-disable react/prop-types */

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
