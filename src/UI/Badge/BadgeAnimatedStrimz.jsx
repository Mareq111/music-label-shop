import React from "react";
import LogoStrimz from "../Icons/Icon-Logo/LogoStrimz";
import "./BadgeAnimatedStrimz.scss";
export default function BadgeAnimatedStrimz() {
  return (
    <div className="logo-and-description">
      <div className="logo-footer-div">
        <LogoStrimz />
      </div>
      <div className="description-strimz">
        <h3 className="strimz-h">Strimz Empire Shop</h3>
        <div className="strimz-p-description">
          <p className="text-animated-strimz" id="first-strimz-p">
            It's the label,
          </p>
          <p className="text-animated-strimz" id="second-strimz-p">
            more than label.
          </p>
        </div>
      </div>
    </div>
  );
}
