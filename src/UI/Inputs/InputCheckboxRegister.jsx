/* import { useState } from "react";

export default function InputCheckoutRegister() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      alert("Regulamin zaakceptowany!");
    } else {
      alert("Proszę zaakceptować regulamin.");
    }
  };

  return (
    <div >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>
        I have read and accept the Terms and Conditions of the online store,
        including the data protection rules contained therein.*.
      </label>
      <button onClick={handleButtonClick} disabled={!isChecked}>
       
      </button>
    </div>
  );
}
 */

import { useState } from "react";
import "./InputCheckboxRegister.scss";

export default function InputCheckboxRegister() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
