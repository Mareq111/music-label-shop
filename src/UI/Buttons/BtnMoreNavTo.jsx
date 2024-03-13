/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './BtnMoreNavTo.scss';
export default function BtnMoreNavTo({ link, title }) {
  return (
    <Link to={link} className="link-btn-more-nav-to">
      <button className="btn-more-nav-to">
        <span className="title-btn-more-nav-to">{title}</span>
      </button>
    </Link>
  );
}
