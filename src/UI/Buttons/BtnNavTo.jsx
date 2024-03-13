/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import IconArrow from "../Icons/IconArrow";
import "./BtnNavTo.scss";

export default function BtnNavTo({ link, img, title }) {
  return (
    <Link to={link} className="link-btn-nav-to">
      <button className="btn-nav-to">
        <span className="img-container-btn-nav-to">
          <img
            className="img-btn-nav-to"
            src={img}
            alt={`Go to ${title} page`}
          />
        </span>
        <span className="title-btn-nav-to">{title}</span>
        <span className="icon-arrow-btn-nav-to">
          <IconArrow />
        </span>
      </button>
    </Link>
  );
}
