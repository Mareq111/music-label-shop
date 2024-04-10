
import "./InputDeliveryFullName.scss";

export default function InputDeliveryFullName() {


  return (
    <div className="input-fullname-container">
      <label title="Full name required" htmlFor="input-fullname">Full name</label>
      <input
        required
        type="text"
        id="input-fullname"
        name="full-name"
        autoComplete="on"
        aria-label="full name"
        placeholder="John Kowalsky"
      />
      {/* error text */}
     {/*  {!isValid && (
        <div id="invalid-message" className="invalid-message">
          Please enter your full name.
        </div>
      )} */}
    </div>
  );
}
