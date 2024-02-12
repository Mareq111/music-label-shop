import React from "react";
import IconUser from "../Icons/IconUser.jsx";
import IconStarFilled from "../Icons/IconStarFilled.jsx";
import "./TextAddedComments.scss";
export default function TextAddedComments() {
  return (
    <>
      <hr className="line-comments-section" />
      <div className="added-comment-all-div">
        <div className="icon-user-name">
          <IconUser />

          <h4 className="added-comment-user-name">Heniox</h4>
        </div>
        <div className="added-rating-and-when">
          <div className="added-rating">
            <h5>5</h5>
            <IconStarFilled />
          </div>
          <h5 className="date-when-added">12.02.2024</h5>
        </div>
        <div className="added-text-comment">
          <p className="added-comment-text">
            super album !! PONADCZESOWEEEEEEE
          </p>
        </div>
      </div>
    </>
  );
}
