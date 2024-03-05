import React from "react";
import IconTinyStarFilled from "../Icons/IconTinyStarFilled";
import "./BadgeRatingProductInfo.scss";
export default function BadgeRatingProductInfo({
  overallRating,
  numberOfReviews,
}) {
  const scrollToRatingReviews = () => {
    const ratingReviews = document.getElementById("rating-review-component");
    if (ratingReviews) {
      ratingReviews.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="div-ratings">
      <div className="rating-with-icon">
        <p className="overall-number">{overallRating}</p>
        <IconTinyStarFilled />
        {/* button to trigger the scroll to reviews component*/}
        <button
          type="button"
          className="number-of-reviews"
          onClick={scrollToRatingReviews}
        >
          {numberOfReviews} reviews
        </button>
      </div>
    </div>
  );
}
