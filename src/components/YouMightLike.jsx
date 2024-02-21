import React from "react";
import "./YouMightLike.scss";
import CardYouMightLike from "../UI/Cards/CardYouMightLike";
export default function YouMightLike() {
  return (
    <article className="you-might-like">
      <div className="div-youMightLike">
        <h4 className="h-youMightLike">You may also like</h4>
        <ul className="ul-list-youMightLike">
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
          <li className="li-youMightLike">
            <CardYouMightLike />
          </li>
        </ul>
      </div>
    </article>
  );
}
