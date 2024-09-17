/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputCheckboxRegister.scss";

export default function InputCheckboxRegister({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState); 
  };

  return (
    <label className="checkbox-container">
      <input
        className="register-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        tabIndex={0}
      />
      <span className="checkmark"></span>
    </label>
  );
}
