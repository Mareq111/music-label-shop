/* eslint-disable react/prop-types */
import IconSearch from "../Icons/IconSearch";
import "./BtnSearchIcon.scss";

export default function BtnSearchIcon({ handleSearch }) {
  return (
    <button
      title="Search products"
      className="btn-searching-icon"
      onClick={handleSearch}
      type="button"
    >
      <IconSearch />
    </button>
  );
}
