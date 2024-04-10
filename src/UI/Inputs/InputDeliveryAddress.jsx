import "./InputDeliveryAddress.scss";

export default function InputDeliveryAddress() {
  return (
    <div className="input-address-container">
      <label htmlFor="input-address">Address </label>
      <input
        type="text"
        id="input-address"
        name="address"
        aria-label="address"
        autoComplete="address-line1"
        placeholder="123 Main Street"
        aria-describedby="addressHelp"
        required
      />
      {/* <div id="div-addressHelp">
        <p id="addressHelp">Please enter your address.</p>
      </div> */}
    </div>
  );
}
