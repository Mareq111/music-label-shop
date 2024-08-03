/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Link, useLocation } from "react-router-dom";
import "./SearchResult.scss";
import firebaseConfig from "../firebaseConfig.js";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart.jsx";
import CardSearchPrompt from "../UI/Cards/CardSearchPrompt.jsx";

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("start"); // start, found, notfound
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
        // if we dont found any item
        if (results.length === 0) {
          setSearchStatus("notfound");
          // if we  found any item
        } else {
          setSearchStatus("found");
        }
        // initial state
      } else {
        setSearchResults([]);
        setSearchStatus("start");
      }
    };

    fetchSearchResults();
  }, [query]);

  // Dynamic text for CardSearchPrompt
  let cardTitle, cardParagraph;

  if (searchStatus === "start") {
    cardTitle = "What will you discover today?";
    cardParagraph = "Explore top picks and hidden gems.";
  } else if (searchStatus === "found") {
    cardTitle = `Results for "${query}"`;
    cardParagraph = "Here are the best matches based on your search.";
  } else if (searchStatus === "notfound") {
    cardTitle = `No results for "${query}"`;
    cardParagraph = "Try again using a different spelling or keywords.";
  }

  return (
    <div className="all-search-page">
      <CardSearchPrompt titleCard={cardTitle} paragraphText={cardParagraph} />

      <div className="search-results">
        {searchStatus === "notfound" && (
          <div className="customer-favorites-search">
            <CustomerFavoritesCart
              titleCard={"Suggestions Based on Your Search"}
            />
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
      </div>
    </div>
  );
}
