/* eslint-disable react/prop-types */

import IconUser from "../Icons/IconUser.jsx";
import "./TextAddedComments.scss";
import IconTinyStarFilled from "../Icons/IconTinyStarFilled.jsx";

export default function TextAddedComments({
  userName,
  rating,
  dateAdded,
  commentText,
}) {
  return (
    <div className="added-comment-all-div">
      <div className="icon-user-name-div">
        <IconUser id={undefined} />
        <h4 className="added-comment-user-name">{userName}</h4>
      </div>
      <div className="added-rating-and-when-div">
        <div className="added-rating-div">
          <h5 className="added-rating-h">{rating}</h5>
          <IconTinyStarFilled />
        </div>
        <h5 className="date-when-added">{dateAdded}</h5>
      </div>
      <hr className="line-hr-separator" />
      <div className="added-text-comment">
        <p className="added-comment-text">{commentText}</p>
      </div>
    </div>
  );
}
