import { useState } from "react";
import countriesData from "../../data/countriesData.js";
import "./InputDeliveryCountrySelect.scss";
export default function InputDeliveryCountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  //sort data from countries data to alphabetically state
  const sortedCountries = countriesData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="div-delivery-country-select">
      <label htmlFor="select-delivery-country-select">Select a country </label>
      <select
        required
        id="select-delivery-country-select"
        value={selectedCountry}
        aria-label="choose country"
        onChange={handleChange}
      >
        <option id="option-delivery-country-select" value="">
          Choose country
        </option>
        {sortedCountries.map((country) => (
          <option
            className="option-delivery-country-select"
            key={country.code}
            value={country.code}
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
