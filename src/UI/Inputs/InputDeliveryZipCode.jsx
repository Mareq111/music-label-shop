
import "./InputDeliveryZipCode.scss";

export default function InputDeliveryZipCode() {
  return (
    <div className="input-zip-code-container">
      <label htmlFor="input-zip-code">Zip Code *</label>
      <input
        type="text"
        id="input-zip-code"
        name="zip-code"
        aria-label="zip code"
        autoComplete="postal-code"
        placeholder="90035"
        aria-describedby="zipCodeHelp"
        required
      />
      {/* <div id="div-zipCodeHelp">
        <p id="zipCodeHelp">Please enter your zip code.</p>
      </div> */}
    </div>
  );
}
