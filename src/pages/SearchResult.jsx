import BadgePopularCategories from "../UI/Badge/BadgeCategoriesWithH";
import "./SearchResult.scss";

export default function SearchResult() {
  return (
    <div className="all-search-page">
      <div className="categories-search-div">
        <div className="div">
          <BadgePopularCategories />
        </div>
      </div>
    </div>
  );
}
