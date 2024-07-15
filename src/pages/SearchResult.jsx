/* eslint-disable react/prop-types */

/* import "./SearchResult.scss";
import BadgeCategoriesWithH from "../UI/Badge/BadgeCategoriesWithH";
export default function SearchResult({ searchResults }) {
  return (
    <div className="all-search-page">
      <div className="categories-search-div">
        <div className="div"></div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((product, index) => (
            <div key={index} className="search-result-item">
              <p>Check out our results</p>
              <h3>{product.titleArtist || product.name}</h3>
              <p>{product.TitleItem}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
        <BadgeCategoriesWithH />
      </div>
    </div>
  );
}
 */

/* import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useLocation } from "react-router-dom";
import BadgeCategoriesWithH from "../UI/Badge/BadgeCategoriesWithH";
import "./SearchResult.scss";
import firebaseConfig from "../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const categories = [
          "albums",
          "tickets",
          "posters",
          "t-shirts",
          "gadgets",
          "puzzles",
        ];
        let results = [];

        for (const category of categories) {
          const ref = firebase
            .database()
            .ref(`categories/${category}/products`);
          const snapshot = await ref
            .orderByChild("titleArtist")
            .startAt(query)
            .endAt(query + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category })
            );
            results = [...results, ...categoryResults];
          }
        }

        setSearchResults(results);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="all-search-page">
      <div className="categories-search-div">
        <div className="div"></div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((product, index) => (
            <div key={index} className="search-result-item">
              <p>Check out our results</p>
              <h3>{product.titleArtist || product.name}</h3>
              <p>{product.TitleItem}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
        <BadgeCategoriesWithH />
      </div>
    </div>
  );
}
 */

import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useLocation } from "react-router-dom";
import BadgeCategoriesWithH from "../UI/Badge/BadgeCategoriesWithH";
import "./SearchResult.scss";
import firebaseConfig from "../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const categories = [
          { name: "albums", index: "titleArtist" },
          { name: "tickets", index: "country" },
          { name: "posters", index: "titleArtist" },
          { name: "t-shirts", index: "color" },
          { name: "gadgets", index: "itemTitle" },
          { name: "puzzles", index: "itemLevel" },
        ];
        let results = [];

        for (const category of categories) {
          const ref = firebase
            .database()
            .ref(`categories/${category.name}/products`);
          const snapshot = await ref
            .orderByChild(category.index)
            .startAt(query)
            .endAt(query + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category: category.name })
            );
            results = [...results, ...categoryResults];
          }
        }

        setSearchResults(results);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="all-search-page">
      <div className="categories-search-div">
        <div className="div"></div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((product, index) => (
            <div key={index} className="search-result-item">
              <p>Check out our results</p>
              <h3>{product.titleArtist || product.name}</h3>
              <p>{product.TitleItem}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
        <BadgeCategoriesWithH />
      </div>
    </div>
  );
}
