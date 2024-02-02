import React from "react";
import LogoStrimz from "../Icons/Icon-Logo/LogoStrimz";
import "./BtnCheckWebsite.scss";
export default function BtnCheckWebsite() {
  //function with link to strimz page when btn  is clicked and open in another page
  const handleBtnToWebsite = () => {
    const websiteStrimzUrl = "https://strimz.netlify.app/";
    window.open(websiteStrimzUrl, "_blank");
  };
  return (
    <button tabIndex={0}
      onClick={handleBtnToWebsite}
      type="button"
      className="btn-accordion-listen-free"
    >
      <LogoStrimz />
      <p className="text-with-logo">Strimz Empire</p>
    </button>
  );
}
