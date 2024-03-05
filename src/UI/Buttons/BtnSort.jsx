import  { useState } from "react";
import IconChevronDown from "../Icons/IconChevronDown";
import IconChevronUp from "../Icons/IconChevronUp";
import "./BtnSort.scss";
import DropDownSelect from "../Dropddowns/DropDownSelect";
export default function BtnSort() {
  //data for dropdownselect
  const radioOptions = [
    {
      radioId: "latest",
      radioValue: "latest",
      radioAriaLabel: "Latest",
      radioLabel: "Latest",
      radioKey: "latest",
    },
    {
      radioId: "oldest",
      radioValue: "oldest",
      radioAriaLabel: "The oldest",
      radioLabel: "The oldest",
      radioKey: "oldest",
    },
    {
      radioId: "top-rated",
      radioValue: "top-rated",
      radioAriaLabel: "Top rated",
      radioLabel: "Top rated",
      radioKey: "top-rated",
    },
    {
      radioId: "lowest-rated",
      radioValue: "lowest-rated",
      radioAriaLabel: "Lowest rated",
      radioLabel: "Lowest rated",
      radioKey: "lowest-rated",
    },
  ];

  // use state to change chevron down from up  when clicked on sort button
  const [isChevronChange, setChevronChange] = useState(true);
  //dropdown is open or not
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleIcon = () => {
    console.log("clicked");
    setChevronChange(!isChevronChange);
    setDropdownOpen(!isDropdownOpen);
  };
  const settingIcons = isChevronChange ? (
    <IconChevronDown />
  ) : (
    <IconChevronUp />
  );
  return (
    <div>
      <button
        onClick={toggleIcon}
        type="button"
        aria-label="Toggle sorting order"
        className="sort-comments-by-btn"
      >
        <p className="sort-comments-p">Sort by</p>
        {settingIcons}
      </button>
      {/* Dropdown menu */}
      {isDropdownOpen && <DropDownSelect radioOptions={radioOptions} />}
    </div>
  );
}
