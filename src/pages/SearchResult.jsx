/* eslint-disable react/prop-types */
/* import BadgePopularCategories from "../UI/Badge/BadgeCategoriesWithH";
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
 */

/* import "./SearchResult.scss";

import BadgeCategoriesWithH from "../UI/Badge/BadgeCategoriesWithH";
export default function SearchResult({ searchResults }) {
  return (
    <div className="all-search-page">
      <div className="categories-search-div">
        <div className="div">
      
        </div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((product, index) => (
            <div key={index} className="search-result-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
} */
  import "./SearchResult.scss";

  export default function SearchResult({ searchResults }) {
    return (
      <div className="all-search-page">
        <div className="categories-search-div">
          <div className="div">
            {/* <BadgeCategoriesWithH /> */}
          </div>
        </div>
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product, index) => (
              <div key={index} className="search-result-item">
                <h3>{product.titleArtist || product.name}</h3>
               <p>{product.TitleItem}</p>
                {/*  <p>{product.price}</p>
                <p>{product.category}</p> */}
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    );
  }
  