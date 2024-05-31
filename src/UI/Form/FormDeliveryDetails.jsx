/* eslint-disable react/prop-types */
/* import ChooserDeliveryOptions from "../../components/ChooserDeliveryOptions";
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
        <ChooserDeliveryOptions />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
} */

/* import React, { useState, useEffect } from "react";
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

export default function FormDeliveryDetails({ onValidationChange }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    zipCode: "",
    city: "",
    address: "",
    deliveryOption: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(field => field.trim() !== "");
    setIsFormValid(isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);

  const handleChange = (field, value) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName onChange={(value) => handleChange("fullName", value)} />
        <InputDeliveryPhoneNumber onChange={(value) => handleChange("phoneNumber", value)} />
        <InputDeliveryEmail onChange={(value) => handleChange("email", value)} />
        <InputDeliveryCountrySelect onChange={(value) => handleChange("country", value)} />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode onChange={(value) => handleChange("zipCode", value)} />
          <InputDeliveryCity onChange={(value) => handleChange("city", value)} />
        </div>
        <InputDeliveryAddress onChange={(value) => handleChange("address", value)} />
        <ChooserDeliveryOptions onChange={(value) => handleChange("deliveryOption", value)} />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
}
 */

/* import  { useState, useEffect } from "react";
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

export default function FormDeliveryDetails({ onValidationChange }) {
  const [formData, setFormData] = useState({
    fullName: { value: "", isValid: false },
    phoneNumber: { value: "", isValid: false },
    email: { value: "", isValid: false },
    country: { value: "", isValid: false },
    zipCode: { value: "", isValid: false },
    city: { value: "", isValid: false },
    address: { value: "", isValid: false },
    deliveryOption: { value: "", isValid: false },
  });

  useEffect(() => {
    const isValid = Object.values(formData).every(field => field.isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);

  const handleInputChange = (field, value, isValid) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: { value, isValid },
    }));
  };

  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName onChange={(value, isValid) => handleInputChange("fullName", value, isValid)} />
        <InputDeliveryPhoneNumber onChange={(value, isValid) => handleInputChange("phoneNumber", value, isValid)} />
        <InputDeliveryEmail onChange={(value, isValid) => handleInputChange("email", value, isValid)} />
        <InputDeliveryCountrySelect onChange={(value, isValid) => handleInputChange("country", value, isValid)} />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode onChange={(value, isValid) => handleInputChange("zipCode", value, isValid)} />
          <InputDeliveryCity onChange={(value, isValid) => handleInputChange("city", value, isValid)} />
        </div>
        <InputDeliveryAddress onChange={(value, isValid) => handleInputChange("address", value, isValid)} />
        <ChooserDeliveryOptions onChange={(value, isValid) => handleInputChange("deliveryOption", value, isValid)} />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
}
 */

/* import { useState, useEffect } from "react";
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

export default function FormDeliveryDetails({ onValidationChange }) {
  const [formData, setFormData] = useState({
    fullName: { value: "", isValid: false },
    phoneNumber: { value: "", isValid: false },
    email: { value: "", isValid: false },
    country: { value: "", isValid: false },
    zipCode: { value: "", isValid: false },
    city: { value: "", isValid: false },
    address: { value: "", isValid: false },
    deliveryOption: { value: "", isValid: false },
  });

  useEffect(() => {
    const isValid = Object.values(formData).every(field => field.isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);

  const handleInputChange = (field, value, isValid) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: { value, isValid },
    }));
  };

  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName onChange={(value, isValid) => handleInputChange("fullName", value, isValid)} />
        <InputDeliveryPhoneNumber onChange={(value, isValid) => handleInputChange("phoneNumber", value, isValid)} />
        <InputDeliveryEmail onChange={(value, isValid) => handleInputChange("email", value, isValid)} />
        <InputDeliveryCountrySelect onChange={(value, isValid) => handleInputChange("country", value, isValid)} />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode onChange={(value, isValid) => handleInputChange("zipCode", value, isValid)} />
          <InputDeliveryCity onChange={(value, isValid) => handleInputChange("city", value, isValid)} />
        </div>
        <InputDeliveryAddress onChange={(value, isValid) => handleInputChange("address", value, isValid)} />
        <ChooserDeliveryOptions onChange={(value, isValid) => handleInputChange("deliveryOption", value, isValid)} />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
} */

import { useState, useEffect } from "react";
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

export default function FormDeliveryDetails({ onValidationChange }) {
  const [formData, setFormData] = useState({
    fullName: { value: "", isValid: false },
    phoneNumber: { value: "", isValid: false },
    email: { value: "", isValid: false },
    country: { value: "", isValid: false },
    zipCode: { value: "", isValid: false },
    city: { value: "", isValid: false },
    address: { value: "", isValid: false },
    deliveryOption: { value: "", isValid: false },
  });

  const handleInputChange = (field, value) => {
    console.log("Updating state for field:", field);
    setFormData((prevState) => ({
      ...prevState,
      [field]: { value, isValid: true },
    }));
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.isValid);
    onValidationChange(isValid);
  }, [formData, onValidationChange]);

  return (
    <form className="form-delivery-details" action="">
      <fieldset className="fieldset-form--delivery-details">
        <legend className="legend-delivery-details">
          Your delivery details
        </legend>
        <InputDeliveryFullName
          onChange={(value, isValid) =>
            handleInputChange("fullName", value, isValid)
          }
        />
        <InputDeliveryPhoneNumber
          onChange={(value, isValid) =>
            handleInputChange("phoneNumber", value, isValid)
          }
        />
        <InputDeliveryEmail
          onChange={(value, isValid) =>
            handleInputChange("email", value, isValid)
          }
        />
        <InputDeliveryCountrySelect
          onChange={(value, isValid) =>
            handleInputChange("country", value, isValid)
          }
        />
        <div className="postal-code-wth-city">
          <InputDeliveryZipCode
            onChange={(value, isValid) =>
              handleInputChange("zipCode", value, isValid)
            }
          />
          <InputDeliveryCity
            onChange={(value, isValid) =>
              handleInputChange("city", value, isValid)
            }
          />
        </div>
        <InputDeliveryAddress
          onChange={(value, isValid) =>
            handleInputChange("address", value, isValid)
          }
        />
        <ChooserDeliveryOptions
          onChange={(value, isValid) =>
            handleInputChange("deliveryOption", value, isValid)
          }
        />
      </fieldset>
      <BadgeFormRequired />
    </form>
  );
}
