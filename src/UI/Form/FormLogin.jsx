import { useDispatch, useSelector } from "react-redux";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import "./FormLogin.scss";

import { updateFormField } from "../../store/formSlice";

import InputPassword from "../Inputs/InputPassword";

import BadgeForgotPassword from "../Badge/BadgeForgotPassword";
export default function FormLogin() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleInputChange = (field, value, isValid) => {
    dispatch(updateFormField({ field, value, isValid }));
  };
  /* 
  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);
 */
  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">Log In</legend>

        <InputDeliveryEmail
          value={formData.email.value}
          onChange={(value, isValid) =>
            handleInputChange("email", value, isValid)
          }
        />
        <InputPassword />
      </fieldset>
      <BadgeForgotPassword />
    </form>
  );
}
