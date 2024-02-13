import React from "react";
import "./ContentProductDetails.scss";
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import IconTinyStarFilled from "../UI/Icons/IconTinyStarFilled.jsx";

export default function ContentProductDetails() {
  return (
    <div className="div-content-text-all">
      <div className="main-h1-and-p">
        <div className="first-line">
          <h1 className="h1-content-prod-details">Album Wave CD</h1>
          <div className="price">
            <span>33.99€</span>
          </div>
        </div>
        <p className="p-content-prod-details">El Double M</p>
      </div>
      <div className="div-ratings">
        <div className="rating-with-icon">
          <span>4.9</span>
          <IconTinyStarFilled/>
          <span className="number-of-reviews">(11)</span>
        </div>
      </div>

      <ChooserVersionRadio />
      <BtnAddToCart initialPrice={33.99} />
      <BadgesProductDetails />
      <TextProductDescription />
      <AccordionsProductDetails />
    </div>
  );
}
