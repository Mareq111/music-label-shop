import React from "react";
import "./ContentProductDetails.scss";
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import IconTinyStarFilled from "../UI/Icons/IconTinyStarFilled.jsx";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo.jsx";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor.jsx";

export default function ContentProductDetails() {
  const prodData = {
    itemTitle: "Album Wave CD",
    itemPrice: 12.99,
    itemAuthor: "El Double M",
    overallRating: 4.5,
    numberOfReviews: 4,
  };

  return (
    <div className="div-content-text-all">
      <BadgeTitlePriceAuthor
        itemTitle={prodData.itemTitle}
        itemPrice={prodData.itemPrice}
        itemAuthor={prodData.itemAuthor}
      />
      <BadgeRatingProductInfo
        overallRating={prodData.overallRating}
        numberOfReviews={prodData.numberOfReviews}
      />
      <ChooserVersionRadio />

      <BtnAddToCart itemPrice={prodData.itemPrice} />
      <BadgesProductDetails />
      <TextProductDescription />
      <AccordionsProductDetails />
    </div>
  );
}
