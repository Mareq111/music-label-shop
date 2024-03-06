import { useState } from "react";
import { Link } from "react-router-dom";
import IconSearch from "../Icons/IconSearch";
import "./InputSearch.scss";
import IconCircleX from "../Icons/IconCircleX";

export default function InputSearch() {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
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
        />
      </div>
      <div
        className={`icon-searching-focus-div ${
          isInputFocused ? "visible" : ""
        }`}
      >
        <Link className="link-icon-x" to=".." relative="path">
          <IconCircleX />
        </Link>
        <hr className="hr-searching-divider" />
        <IconSearch />
      </div>
    </div>
  );
}
