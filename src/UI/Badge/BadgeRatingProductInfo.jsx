/* eslint-disable react/prop-types */

/* import IconTinyStarFilled from "../Icons/IconTinyStarFilled";
import "./BadgeRatingProductInfo.scss";

export default function BadgeRatingProductInfo({ commentsData }) {
  //overallRating asa average of comments
  const overallRating = calculateOverallRating(commentsData);

  //counting how many reviews there are
  const numberOfReviews = commentsData.length;

  // counting average of comments
  function calculateOverallRating(comments) {
    if (comments.length === 0) return 0;

    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    return totalRating / comments.length;
  }

  //scroll to accordion with reviews
  const scrollToRatingReviews = () => {
    const ratingReviews = document.getElementById("rating-review-component");
    if (ratingReviews) {
      ratingReviews.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="div-ratings">
      <div className="rating-with-icon">
        <p className="overall-number">{overallRating.toFixed(1)}</p>
        <IconTinyStarFilled />
         button to trigger the scroll to reviews component
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
} */

/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

import IconTinyStarFilled from "../Icons/IconTinyStarFilled";
import "./BadgeRatingProductInfo.scss";

export default function BadgeRatingProductInfo({ commentsData }) {
  // Check if commentsData is defined and not null
  if (!commentsData) {
    return (
      <>
        <p> No reviews yet.</p>
      </>
    );
  }

  //overallRating as average of comments
  const overallRating = calculateOverallRating(commentsData);

  //counting how many reviews there are
  const numberOfReviews = commentsData.length;

  // counting average of comments
  function calculateOverallRating(comments) {
    if (comments.length === 0) return 0;

    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    return totalRating / comments.length;
  }

  //scroll to accordion with reviews
  const scrollToRatingReviews = () => {
    const ratingReviews = document.getElementById("rating-review-component");
    if (ratingReviews) {
      ratingReviews.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="div-ratings">
      <div className="rating-with-icon">
        <p className="overall-number">{overallRating.toFixed(1)}</p>
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
