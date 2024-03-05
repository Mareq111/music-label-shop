/* import { Link } from "react-router-dom"; */
import BadgePopularCategories from "../UI/Badge/BadgePopularCategories";
import "./SearchResult.scss";
/* import BtnArrow from "../UI/Buttons/BtnArrow"; */
/* import InputSearch from "../UI/Inputs/InputSearch"; */

export default function SearchResult() {
  return (
    <div className="all-search-page">
      <div className="search-page-div">
        <div className="div">
          <BadgePopularCategories />
        </div>
      </div>
    </div>
  );
}
