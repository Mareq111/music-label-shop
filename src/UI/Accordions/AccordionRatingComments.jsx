import React from "react";
import RadioStarRating from "../Inputs/RadioStarRating.jsx";
import TextAreaComment from "../Text/TextAreaComment.jsx";
import TextAddedComments from "../Text/TextAddedComments.jsx";
import BadgeAddedComments from "../Badge/BadgeAddedComments.jsx";

export default function AccordionRatingComments() {
  //test data comments

  const commentsData = [
    {
      userName: "Heniox",
      rating: 5,
      dateAdded: "12.02.2024",
      commentText: "super album !! PONADCZESOWEEEEEEE",
    },
    {
      userName: "andrewww22",
      rating: 4,
      dateAdded: "21.01.2024",
      commentText: "Sounds good, dope trackzz",
    },
    {
      userName: "mia35",
      rating: 5,
      dateAdded: "07.11.2023",
      commentText:
        "I thought it would be crap but its underrated! I love this album ",
    },
  ];

  return (
    <>
      <form>
        <RadioStarRating />
        <TextAreaComment />
      </form>
      <BadgeAddedComments />
      {/* Mapping 'added' comments from array to show them dynamically */}
      {commentsData.map((comment, index) => (
        <TextAddedComments key={index} {...comment} />
      ))}
    </>
  );
}
