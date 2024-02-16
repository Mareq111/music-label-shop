import React from "react";
import IconChevronDown from "../Icons/IconChevronDown";
import IconChevronUp from "../Icons/IconChevronUp";

import "./BadgeSort.scss";
export default function BadgeSort() {
  return (
    <div className="sort-comments-by-btn">
      <p className="sort-comments-p">Sort by</p>
      <button type="button" className="btns-sort-comments">
        <IconChevronDown />
      </button>
      <button type="button" className="btns-sort-comments">
        <IconChevronUp />
      </button>
    </div>
  );
}
