/* eslint-disable react/prop-types */
/*  import RadioStarRating from "../Inputs/RadioStarRating.jsx";
import TextAreaComment from "../Text/TextAreaComment.jsx";
import TextAddedComments from "../Text/TextAddedComments.jsx";
import BadgeAddedComments from "../Badge/BadgeAddedComments.jsx";
import RadioDropdown from "../Inputs/RadioDropdown.jsx";

export default function AccordionRatingComments({ commentsData }) {
  return (
    <div id="rating-review-component" className="rating-div">
      <form>
        <RadioStarRating />
        <TextAreaComment />
      </form>
      <BadgeAddedComments />
      <RadioDropdown />
      
      {commentsData.map((comment, index) => (
        <TextAddedComments key={index} {...comment} />
      ))}
    </div>
  );
}  */
/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

import RadioStarRating from "../Inputs/RadioStarRating.jsx";
import TextAreaComment from "../Text/TextAreaComment.jsx";
import TextAddedComments from "../Text/TextAddedComments.jsx";
import BadgeAddedComments from "../Badge/BadgeAddedComments.jsx";
import RadioDropdown from "../Inputs/RadioDropdown.jsx";

export default function AccordionRatingComments({ commentsData }) {
  // Check if commentsData is defined and not null
  if (!commentsData) {
    return (
      <div>
        <div><p className="p-no-comments">Unusually quiet... Add the first comment!</p></div>
        <form>
          <RadioStarRating />
          <TextAreaComment />
        </form>
      </div>
    );
  }

  return (
    <div id="rating-review-component" className="rating-div">
      <form>
        <RadioStarRating />
        <TextAreaComment />
      </form>
      <BadgeAddedComments />
      <RadioDropdown />

      {/* Check if commentsData is empty */}
      {commentsData.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        // If commentsData is not empty, map over it and display TextAddedComments
        commentsData.map((comment, index) => (
          <TextAddedComments key={index} {...comment} />
        ))
      )}
    </div>
  );
}
