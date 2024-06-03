/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { updateFormField } from "../../store/formSlice";
import ChooserDeliveryOptions from "../../components/ChooserDeliveryOptions";
import BadgeFormRequired from "../Badge/BadgeFormRequired";
import InputDeliveryAddress from "../Inputs/InputDeliveryAddress";
import InputDeliveryCity from "../Inputs/InputDeliveryCity";
import InputDeliveryCountrySelect from "../Inputs/InputDeliveryCountrySelect";
import InputDeliveryEmail from "../Inputs/InputDeliveryEmail";
import InputDeliveryFullName from "../Inputs/InputDeliveryFullName";
import InputDeliveryPhoneNumber from "../Inputs/InputDeliveryPhoneNumber";
import InputDeliveryZipCode from "../Inputs/InputDeliveryZipCode";
import "./FormDeliveryDetails.scss";
import { useEffect } from "react";

export default function FormDeliveryDetails({ onValidationChange }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleInputChange = (field, value, isValid) => {
    dispatch(updateFormField({ field, value, isValid }));
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);

  const handleShowData = () => {
    console.log("Form Data:", formData);
  };

  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName
          value={formData.fullName.value}
          onChange={(value, isValid) =>
            handleInputChange("fullName", value, isValid)
          }
        />
        <InputDeliveryPhoneNumber
          value={formData.phoneNumber.value}
          onChange={(value, isValid) =>
            handleInputChange("phoneNumber", value, isValid)
          }
        />
        <InputDeliveryEmail
          value={formData.email.value}
          onChange={(value, isValid) =>
            handleInputChange("email", value, isValid)
          }
        />
        <InputDeliveryCountrySelect
          value={formData.country.value}
          onChange={(value, isValid) =>
            handleInputChange("country", value, isValid)
          }
        />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode
            value={formData.zipCode.value}
            onChange={(value, isValid) =>
              handleInputChange("zipCode", value, isValid)
            }
          />
          <InputDeliveryCity
            value={formData.city.value}
            onChange={(value, isValid) =>
              handleInputChange("city", value, isValid)
            }
          />
        </div>
        <InputDeliveryAddress
          value={formData.address.value}
          onChange={(value, isValid) =>
            handleInputChange("address", value, isValid)
          }
        />
        <ChooserDeliveryOptions
          value={formData.deliveryOption.value}
          onChange={(value, isValid) =>
            handleInputChange("deliveryOption", value, isValid)
          }
        />
      </fieldset>
      <BadgeFormRequired />
      <button type="button" onClick={handleShowData}>
        Show Data
      </button>
    </form>
  );
}
