/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputCheckboxRegister.scss";

export default function InputCheckboxRegister({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState); // Notify parent of the new state
  };

  return (
    <label className="checkbox-container">
      <input
        className="register-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  );
}
