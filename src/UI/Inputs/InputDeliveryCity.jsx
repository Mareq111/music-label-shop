
import "./InputDeliveryCity.scss";

export default function InputDeliveryCity() {
  return (
    <div className="input-city-container">
      <label htmlFor="input-city">City </label>
      <input
        type="text"
        id="input-city"
        name="city"
        aria-label="city"
        autoComplete="address-level2"
        placeholder="Beverly Hills" 
        aria-describedby="cityHelp"
        required
      />
      {/* <div id="div-cityHelp">
        <p id="cityHelp">Please enter your city.</p>
      </div> */}
    </div>
  );
}
