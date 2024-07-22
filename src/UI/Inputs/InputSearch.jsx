/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import IconSearch from "../Icons/IconSearch";
import BtnResetSearching from "../Buttons/BtnResetSearching";
import "./InputSearch.scss";
import firebaseConfig from "../../firebaseConfig.js";

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function InputSearch({
  onFocus,
  onBlur,
  searchTerm,
  setSearchResults = () => {},
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || "");
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
      onBlur && onBlur();
    }, 100);
  };

  const handleInputChange = async (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (typeof setSearchResults === "function") {
      if (value.trim() !== "") {
        const categories = [
          "albums",
          "tickets",
          "posters",
          "t-shirts",
          "gadgets",
          "puzzles",
        ];
        const promises = categories.map(async (category) => {
          const ref = firebase
            .database()
            .ref(`categories/${category}/products`);
          const snapshot = await ref.once("value");
          const data = snapshot.val();

          if (data) {
            return Object.keys(data)
              .map((key) => ({
                key,
                ...data[key],
                category,
              }))
              .filter((product) => {
                const keywordsString = Array.isArray(product.keywords)
                  ? product.keywords.join(" ").toLowerCase()
                  : "";
                return keywordsString.includes(value);
              });
          }
          return [];
        });

        Promise.all(promises).then((results) => {
          const flattenedResults = results.flat();
          console.log("Search results:", flattenedResults);
          setSearchResults(flattenedResults);
        });
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleBtnReset = () => {
    setInputValue("");
    setSearchResults([]);
    setInputFocused(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${inputValue}`);
    }
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
        onClick={() => navigate(`/search?q=${inputValue}`)}
      >
        <IconSearch />
      </div>
      <div className="input-wrapper">
        <input
          className={`search-input ${isInputFocused ? "focused" : ""}`}
          type="text"
          placeholder="Search for products..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div
        className={`icon-searching-focus-div ${
          isInputFocused ? "visible" : ""
        }`}
      >
        <BtnResetSearching handleBtnReset={handleBtnReset} />
        <hr className="hr-searching-divider" />
        <IconSearch />
      </div>
    </div>
  );
}
