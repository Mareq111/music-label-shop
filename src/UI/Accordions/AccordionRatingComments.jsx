/* 
import RadioStarRating from "../Inputs/RadioStarRating.jsx";
import TextAreaComment from "../Text/TextAreaComment.jsx";
import TextAddedComments from "../Text/TextAddedComments.jsx";
import BadgeAddedComments from "../Badge/BadgeAddedComments.jsx";
import RadioDropdown from "../Inputs/RadioDropdown.jsx";

export default function AccordionRatingComments() {


  return (
    <div id="rating-review-component" className="rating-div">
      <form>
        <RadioStarRating />
        <TextAreaComment />
      </form>
      <BadgeAddedComments />
      <RadioDropdown/>
      Mapping 'added' comments from array to show them dynamically 
      {commentsData.map((comment, index) => (
        <TextAddedComments key={index} {...comment} />
      ))}
    </div>
  );
} */

//test data comments

/*  const commentsData = [
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
        "I thought it would be crap but its underrated! I love this album",
    },
    {
      userName: "mainhater111",
      rating: 1,
      dateAdded: "22.06.2023",
      commentText:
        "Wczoraj wieczorem, spacerując po malowniczej dzielnicy miasta, napotkałem niezwykłą kawiarnię z przytulnym wystrojem i aromatem świeżo mielonej kawy unoszącym się w powietrzu, co sprawiło, że chwilę zatrzymałem się, by zanurzyć w tej magicznej atmosferze.",
    },
  ]; */
/* eslint-disable react/prop-types */
 import RadioStarRating from "../Inputs/RadioStarRating.jsx";
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
} 
