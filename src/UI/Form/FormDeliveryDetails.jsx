import BadgeFormRequired from "../Badge/BadgeFormRequired";
import InputDeliveryAddress from "../Inputs/InputDeliveryAddress";
import InputDeliveryCity from "../Inputs/InputDeliveryCity";
import InputDeliveryCountrySelect from "../Inputs/InputDeliveryCountrySelect";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import InputDeliveryFullName from "../Inputs/InputDeliveryFullName";
import InputDeliveryPhoneNumber from "../Inputs/InputDeliveryPhoneNumber";
import InputDeliveryZipCode from "../Inputs/InputDeliveryZipCode";
import "./FormDeliveryDetails.scss";
export default function FormDeliveryDetails() {
  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName />
        <InputDeliveryPhoneNumber />
        <InputDeliveryEmail />
        <InputDeliveryCountrySelect />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode />
          <InputDeliveryCity />
        </div>
        <InputDeliveryAddress />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
}
