/* eslint-disable react/prop-types */

import { useState } from "react";
import IconSearch from "../Icons/IconSearch";
import "./InputSearch.scss";
import BtnResetSearching from "../Buttons/BtnResetSearching";

export default function InputSearch({ onFocus, onBlur, searchTerm }) {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    onBlur && onBlur();
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
      >
        <IconSearch />
      </div>
      <div className="input-wrapper">
        <input
          className={`search-input ${isInputFocused ? "focused" : ""}`}
          type="text"
          placeholder="Search for products..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={searchTerm}
        />
      </div>
      <div
        className={`icon-searching-focus-div ${
          isInputFocused ? "visible" : ""
        }`}
      >
        <BtnResetSearching />
        <hr className="hr-searching-divider" />
        <IconSearch />
      </div>
    </div>
  );
}
