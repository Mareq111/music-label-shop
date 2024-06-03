/* eslint-disable react/prop-types */
export default function AccordionCheckoutDetailsAnswer({ formData }) {
  return (
    <div>
      <p>Full Name: {formData.fullName.value}</p>
      <p>Phone Number: {formData.phoneNumber.value}</p>
      <p>Email: {formData.email.value}</p>
      <p>Country: {formData.country.value}</p>
      <p>Zip Code: {formData.zipCode.value}</p>
      <p>Address: {formData.address.value}</p>
      <p>City: {formData.city.value}</p>
      <p>Delivery Option:</p>
      <ul>
        <li>Carrier: {formData.deliveryOption.value.carrier}</li>
        <li>Delivery Time: {formData.deliveryOption.value.deliveryTime}</li>
        <li>Price: {formData.deliveryOption.value.price}</li>
      </ul>
    </div>
  );
}
