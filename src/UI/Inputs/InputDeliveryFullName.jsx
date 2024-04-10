import "./InputDeliveryFullName.scss";
export default function InputDeliveryFullName() {
  return (
    <div className="input-fullname-container">
      <label htmlFor="input-fullname">Full name *</label>
      <input
        required
        type="text"
        id="input-fullname"
        name="full-name"
        autoComplete="on"
        aria-label="full name"
      />
    </div>
  );
}
