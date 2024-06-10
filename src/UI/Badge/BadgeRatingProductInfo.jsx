/* eslint-disable react/prop-types */

import IconTinyStarFilled from "../Icons/IconTinyStarFilled";
import "./BadgeRatingProductInfo.scss";

export default function BadgeRatingProductInfo({ commentsData }) {
  // Check if commentsData is defined and not null
  if (!commentsData) {
    return (
      <>
        <p>No reviews yet.</p>
      </>
    );
  }

  // Overall rating as average of comments
  const overallRating = calculateOverallRating(commentsData);

  // Counting how many reviews there are
  const numberOfReviews = commentsData.length;

  // Counting average of comments
  function calculateOverallRating(comments) {
    if (comments.length === 0) return 0;

    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    return totalRating / comments.length;
  }

  // Scroll to accordion with reviews
  const scrollToRatingReviews = () => {
    const ratingReviews = document.getElementById("rating-review-component");
    if (ratingReviews) {
      const margin = 128; // Margin in pixels
      const elementPosition = ratingReviews.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - margin;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="div-ratings">
      <div className="rating-with-icon">
        <p className="overall-number">{overallRating.toFixed(1)}</p>
        <IconTinyStarFilled />
        {/* Button to trigger the scroll to reviews component */}
        <button
          type="button"
          className="number-of-reviews"
          onClick={scrollToRatingReviews}
        >
          {/* Conditionally render "reviews" or "review" based on the number of reviews */}
          {numberOfReviews === 1 ? "1 review" : `${numberOfReviews} reviews`}
        </button>
      </div>
    </div>
  );
}
