import React from "react";
import RadioStarRating from "../Inputs/RadioStarRating.jsx";
import TextAreaComment from "../Text/TextAreaComment.jsx";
import TextAddedComments from "../Text/TextAddedComments.jsx";

export default function AccordionRatingComments() {
  return (
    <>
      <form>
        <RadioStarRating />
        <TextAreaComment />
      </form>
      <TextAddedComments />
    </>
  );
}
