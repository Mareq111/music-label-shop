import { useDispatch, useSelector } from "react-redux";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import "./FormRegister.scss";
import { updateFormField } from "../../store/formSlice";
import InputPassword from "../Inputs/InputPassword";

import InputDeliveryFullName from "../Inputs/InputDeliveryFullName";
import InputCheckoutRegister from "../Inputs/InputCheckboxRegister";
export default function FormRegister() {
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
    <form className="form-register" action="">
      <fieldset className="fieldset-form--register">
        <legend className="legend-register">Register</legend>
        <InputDeliveryFullName
          value={formData.fullName.value}
          onChange={(value, isValid) =>
            handleInputChange("fullName", value, isValid)
          }
        />
        <InputDeliveryEmail
          value={formData.email.value}
          onChange={(value, isValid) =>
            handleInputChange("email", value, isValid)
          }
        />
        <InputPassword />
      </fieldset>

      <InputCheckoutRegister />
    </form>
  );
}
