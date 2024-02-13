import React from "react";
import IconUser from "../Icons/IconUser.jsx";
import IconStarFilled from "../Icons/IconStarFilled.jsx";
import "./TextAddedComments.scss";
export default function TextAddedComments({
  userName,
  rating,
  dateAdded,
  commentText,
}) {
  return (
    <>
      <div className="added-comment-all-div">
        <div className="icon-user-name">
          <IconUser id={undefined} />

          <h4 className="added-comment-user-name">{userName}</h4>
        </div>
        <div className="added-rating-and-when">
          <div className="added-rating">
            <h5>{rating}</h5>
            <IconStarFilled />
          </div>
          <h5 className="date-when-added">{dateAdded}</h5>
        </div>
        <div className="added-text-comment">
          <p className="added-comment-text">{commentText}</p>
        </div>
      </div>
    </>
  );
}
