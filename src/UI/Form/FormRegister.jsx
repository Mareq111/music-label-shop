/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import InputPassword from "../Inputs/InputPassword";
import InputDeliveryFullName from "../Inputs/InputDeliveryFullName";
import BadgeCheckboxTerms from "../Badge/BadgeCheckboxTerms";
import { updateLoginFormField } from "../../store/formRegisterSlice";
import "./FormRegister.scss";

export default function FormRegister({ onValidationChange }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form || {}); // Safe default

  const [email, setEmail] = useState(formData.email?.value || "");
  const [password, setPassword] = useState(formData.password?.value || "");
  const [fullName, setFullName] = useState(formData.fullName?.value || "");

  const [isValidEmail, setIsValidEmail] = useState(
    formData.email?.isValid || false
  );
  const [isValidPassword, setIsValidPassword] = useState(
    formData.password?.isValid || false
  );
  const [isValidFullName, setIsValidFullName] = useState(
    formData.fullName?.isValid || false
  );

  // New state for the terms checkbox
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  useEffect(() => {
    // Update form validity based on all fields and the terms checkbox
    const isFormValid =
      isValidEmail && isValidPassword && isValidFullName && isTermsChecked;
    onValidationChange(isFormValid);
  }, [
    isValidEmail,
    isValidPassword,
    isValidFullName,
    isTermsChecked,
    onValidationChange,
  ]);

  const handleEmailChange = (value, isValid) => {
    setEmail(value);
    setIsValidEmail(isValid);
    handleInputChange("email", value, isValid);
  };

  const handlePasswordChange = (value, isValid) => {
    setPassword(value);
    setIsValidPassword(isValid);
    handleInputChange("password", value, isValid);
  };

  const handleFullNameChange = (value, isValid) => {
    setFullName(value);
    setIsValidFullName(isValid);
    handleInputChange("fullName", value, isValid);
  };

  const handleTermsChange = (isChecked) => {
    setIsTermsChecked(isChecked);
  };

  const handleInputChange = (field, value, isValid) => {
    dispatch(updateLoginFormField({ field, value, isValid }));
  };

  return (
    <form className="form-register" action="">
      <fieldset className="fieldset-form--register">
        <legend className="legend-register">Create an Account</legend>
        <InputDeliveryFullName
          value={fullName}
          onChange={handleFullNameChange}
        />
        <InputDeliveryEmail value={email} onChange={handleEmailChange} />
        <InputPassword value={password} onChange={handlePasswordChange} />
      </fieldset>
      <BadgeCheckboxTerms onChange={handleTermsChange} />
    </form>
  );
}
