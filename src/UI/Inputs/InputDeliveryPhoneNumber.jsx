import "./InputDeliveryPhoneNumber.scss";

export default function InputDeliveryPhoneNumber() {
  return (
    <div className="input-phonenumber-container">
      <label htmlFor="input-phone-number">Phone number</label>
      <input
        type="tel"
        id="input-phone-number"
        name="phone-number"
        autoComplete="tel"
        placeholder="example: 546 - 099 - 889"
        required
        aria-label="phone number"
      />
    </div>
  );
}
