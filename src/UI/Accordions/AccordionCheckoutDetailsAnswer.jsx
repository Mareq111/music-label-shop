/* eslint-disable react/prop-types */
import "./AccordionDetailedInfo.scss";

export default function AccordionCheckoutDetailsAnswer({ formData }) {
  return (
    <div className="parameters-div">
      <h3 className="detailedInfo-h">
        Full Name: <p className="detailedInfo-p">{formData.fullName.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Phone Number:{" "}
        <p className="detailedInfo-p">{formData.phoneNumber.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Email: <p className="detailedInfo-p">{formData.email.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Country: <p className="detailedInfo-p">{formData.country.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Zip Code: <p className="detailedInfo-p">{formData.zipCode.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Address: <p className="detailedInfo-p">{formData.address.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        City: <p className="detailedInfo-p">{formData.city.value}</p>
      </h3>
      <h3 className="detailedInfo-h">
        Delivery Carrier:{" "}
        <p className="detailedInfo-p">
          {formData.deliveryOption.value.carrier}
        </p>{" "}
      </h3>
      <h3 className="detailedInfo-h">
        Delivery Time:{" "}
        <p className="detailedInfo-p">
          {formData.deliveryOption.value.deliveryTime} days
        </p>{" "}
      </h3>
      <h3 className="detailedInfo-h">
        Delivery Price:{" "}
        <p className="detailedInfo-p">{formData.deliveryOption.value.price}€</p>
      </h3>
    </div>
  );
}
