import InputDeliveryCountrySelect from "../Inputs/InputDeliveryCountrySelect";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import InputDeliveryFullName from "../Inputs/InputDeliveryFullName";
import InputDeliveryPhoneNumber from "../Inputs/InputDeliveryPhoneNumber";
import "./FormDeliveryDetails.scss";
export default function FormDeliveryDetails() {
  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">Your delivery details</legend>
        <InputDeliveryFullName />
        <InputDeliveryPhoneNumber />
        <InputDeliveryEmail />
        <InputDeliveryCountrySelect />
      </fieldset>
    </form>
  );
}
