import React from "react";
import "./BtnComebackToTop.scss";
export default function BtnComebackToTop() {
  //function to scroll upo if btn is clicked
  const handleBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={handleBtnClick}
      type="button"
      aria-label="Click to comeback to top of page"
      className="btn-comeback-to-top"
    >
      Comeback to top
    </button>
  );
}
