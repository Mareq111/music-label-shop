import React from "react";
import LogoStrimz from "../Icons/Icon-Logo/LogoStrimz";
import "./CardFooterSmall.scss";
import BtnComebackToTop from "../Buttons/BtnComebackToTop";
import BadgeAnimatedStrimz from "../Badge/BadgeAnimatedStrimz";
export default function CardFooterSmall() {
  return (
    <div className="card-footer-small">
      <BadgeAnimatedStrimz />
      <p className="text-rights-footer-card">
        © 2024 All Rights Reserved, Strimz Empire.
      </p>
      <BtnComebackToTop />
    </div>
  );
}
