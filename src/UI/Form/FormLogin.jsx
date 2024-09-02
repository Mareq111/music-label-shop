/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import "./FormLogin.scss";
import { updateLoginFormField } from "../../store/formLoginSlice";
import InputPassword from "../Inputs/InputPassword";
import BadgeForgotPassword from "../Badge/BadgeForgotPassword";
import { useEffect, useState } from "react";

export default function FormLogin({ onValidationChange }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const [email, setEmail] = useState(formData.email?.value || "");
  const [password, setPassword] = useState(formData.password?.value || "");
  const [isValidEmail, setIsValidEmail] = useState(
    formData.email?.isValid || false
  );
  const [isValidPassword, setIsValidPassword] = useState(
    formData.password?.isValid || false
  );

  useEffect(() => {
    // Update form validity based on both fields
    onValidationChange(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword, onValidationChange]);

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

  const handleInputChange = (field, value, isValid) => {
    dispatch(updateLoginFormField({ field, value, isValid }));
  };

  return (
    <form className="form-login" action="">
      <fieldset className="fieldset-form--login">
        <legend className="legend-login">Log In</legend>

        <InputDeliveryEmail value={email} onChange={handleEmailChange} />
        <InputPassword value={password} onChange={handlePasswordChange} />
      </fieldset>
      <BadgeForgotPassword />
    </form>
  );
}
