import React from "react";
import IconSearch from "../Icons/IconSearch";
import "./InputSearch.scss";
export default function InputSearch() {
  return (
    <div className="search-bar">
      <IconSearch />
      <input
        className="search-input"
        type="text"
        placeholder="Search for products..."
      ></input>
    </div>
  );
}
