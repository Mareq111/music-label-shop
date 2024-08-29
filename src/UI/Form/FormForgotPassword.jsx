import { useDispatch, useSelector } from "react-redux";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import "./FormForgotPassword.scss";
import { updateFormField } from "../../store/formSlice";
export default function FormForgotPassword() {
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
    <form className="form-forgot-password" action="">
      <fieldset className="fieldset-form--forgot-password">
        <legend className="legend-forgot-password">Reset password</legend>
        <p className="text-forgot-password">
          Enter the e-mail address entered during registration, and we will send
          you a message with a special link to a page that allows you to change
          your password.
        </p>

        <InputDeliveryEmail
          value={formData.email.value}
          onChange={(value, isValid) =>
            handleInputChange("email", value, isValid)
          }
        />
      </fieldset>
    </form>
  );
}
