/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Link, useLocation } from "react-router-dom";
import BadgeCategoriesWithH from "../UI/Badge/BadgeCategoriesWithH";
import "./SearchResult.scss";
import firebaseConfig from "../firebaseConfig.js";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  //always looking for page starts on their top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const categories = [
          { name: "albums", index: "keywords" },
          { name: "tickets", index: "country" },
          { name: "posters", index: "keywords" },
          { name: "t-shirts", index: "keywords" },
          { name: "gadgets", index: "keywords" },
          { name: "puzzles", index: "keywords" },
        ];
        let results = [];

        for (const category of categories) {
          const ref = firebase
            .database()
            .ref(`categories/${category.name}/products`);
          const snapshot = await ref.once("value");
          const data = snapshot.val();

          if (data) {
            const categoryResults = Object.entries(data)
              .map(([key, value]) => ({
                key,
                ...value,
                category: category.name,
              }))
              .filter((product) => {
                const keywordsString = Array.isArray(product.keywords)
                  ? product.keywords.join(" ").toLowerCase()
                  : "";
                return keywordsString.includes(query.toLowerCase());
              });
            results = [...results, ...categoryResults];
          }
        }

        console.log("Fetched search results:", results);
        setSearchResults(results);
        if (results.length === 0) {
          /* errorMessage*/

          setErrorMessage(
            `There are no results for "${query}". Try again using a different spelling or keywords.`
          );
        } else {
          setErrorMessage("");
        }
      } else {
        setSearchResults([]);
        setErrorMessage("");
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
        {/* error message */}
        {errorMessage && (
          <div className="error-message-div">
            <p className="p-error-message">{errorMessage}</p>
          </div>
        )}
        <ul className="ul-search-page">
          {searchResults.map((item) => {
            console.log("Rendering item:", item);
            return (
              <li className="li-productsMain" key={item.key}>
                <Link to={`/${item.key}`}>
                  <CardProductMain
                    product={item}
                    layout="grid"
                    customClass=""
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="addictional-content-search-result">
          <BadgeCategoriesWithH />
        </div>
      </div>
    </div>
  );
}
