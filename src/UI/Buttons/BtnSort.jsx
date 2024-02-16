import React, { useState } from "react";
import IconChevronDown from "../Icons/IconChevronDown";
import IconChevronUp from "../Icons/IconChevronUp";
import "./BtnSort.scss";
export default function BtnSort() {
  // use state to change chevron down from up  when clicked on sort button
  const [isChevronChange, setChevronChange] = useState(true);

  const toggleIcon = () => {
    setChevronChange(!isChevronChange);
  };
  const settingIcons = isChevronChange ? (
    <IconChevronDown />
  ) : (
    <IconChevronUp />
  );
  return (
    <>
    <button
      onClick={toggleIcon}
      type="button"
      aria-label="Toggle sorting order"
      className="sort-comments-by-btn"
    >
      <p className="sort-comments-p">Sort by</p>
      {settingIcons}
    </button>
      </>
  );
}
