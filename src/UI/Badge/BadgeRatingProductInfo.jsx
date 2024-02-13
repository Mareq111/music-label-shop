import React from "react";
import IconTinyStarFilled from "../Icons/IconTinyStarFilled";

export default function BadgeRatingProductInfo({
  overallRating,
  numberOfReviews,
}) {
  return (
    <div className="div-ratings">
      <div className="rating-with-icon">
        <span>{overallRating}</span>
        <IconTinyStarFilled />
        <span className="number-of-reviews">({numberOfReviews})</span>
      </div>
    </div>
  );
}
