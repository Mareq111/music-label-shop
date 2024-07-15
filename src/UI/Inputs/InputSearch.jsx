/* eslint-disable react/prop-types */
/*
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import IconSearch from "../Icons/IconSearch";
import BtnResetSearching from "../Buttons/BtnResetSearching";
import "./InputSearch.scss";
import firebaseConfig from "../../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function InputSearch({
  onFocus,
  onBlur,
  searchTerm,
  setSearchResults,
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    onBlur && onBlur();
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (typeof setSearchResults === "function") {
      if (value) {
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
            .startAt(value)
            .endAt(value + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category })
            );
            results = [...results, ...categoryResults];
          }
        }

        console.log("Search results:", results);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleSearchClick = () => {
    document.querySelector(".search-input").focus();
    handleInputChange({ target: { value: inputValue } });
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
        onClick={handleSearchClick}
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
        />
      </div>
      <div
        className={`icon-searching-focus-div ${
          isInputFocused ? "visible" : ""
        }`}
      >
        <BtnResetSearching onClick={() => setInputValue("")} />
        <hr className="hr-searching-divider" />
        <IconSearch />
      </div>
    </div>
  );
}
 */

/* eslint-disable react/prop-types */
/*  import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import IconSearch from "../Icons/IconSearch";
import BtnResetSearching from "../Buttons/BtnResetSearching";
import "./InputSearch.scss";
import firebaseConfig from "../../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function InputSearch({
  onFocus,
  onBlur,
  searchTerm,
  setSearchResults,
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    onBlur && onBlur();
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (typeof setSearchResults === "function") {
      if (value) {
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
            .startAt(value)
            .endAt(value + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category })
            );
            results = [...results, ...categoryResults];
          }
        }

        console.log("Search results:", results);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleSearchClick = () => {
    document.querySelector(".search-input").focus();
    handleInputChange({ target: { value: inputValue } });
  };

  const handleBtnReset = () => {
      console.log("Reset button clicked");
    setInputValue("");
    setSearchResults([]);
    setInputFocused(false);
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
        onClick={handleSearchClick}
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
        />
      </div>
      <div
        className={`icon-searching-focus-div ${
          isInputFocused ? "visible" : ""
        }`}
      >
        <BtnResetSearching onClick={handleBtnReset} />
        <hr className="hr-searching-divider" />
        <IconSearch />
      </div>
    </div>
  );
}
  */

/* import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import IconSearch from "../Icons/IconSearch";
import BtnResetSearching from "../Buttons/BtnResetSearching";
import "./InputSearch.scss";
import firebaseConfig from "../../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function InputSearch({
  onFocus,
  onBlur,
  searchTerm,
  setSearchResults,
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    onBlur && onBlur();
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (typeof setSearchResults === "function") {
      if (value) {
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
            .startAt(value)
            .endAt(value + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category })
            );
            results = [...results, ...categoryResults];
          }
        }

        console.log("Search results:", results);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleSearchClick = () => {
    document.querySelector(".search-input").focus();
    handleInputChange({ target: { value: inputValue } });
  };

  const handleBtnReset = () => {
    console.log("Reset button clicked");
    setInputValue("");
    setSearchResults([]);
    setInputFocused(false);
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
        onClick={handleSearchClick}
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
 */

import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import IconSearch from "../Icons/IconSearch";
import BtnResetSearching from "../Buttons/BtnResetSearching";
import "./InputSearch.scss";
import firebaseConfig from "../../firebaseConfig.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function InputSearch({
  onFocus,
  onBlur,
  searchTerm,
  setSearchResults,
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleInputFocus = () => {
    setInputFocused(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    // Delay the blur handling to ensure button click is registered first
    setTimeout(() => {
      setInputFocused(false);
      onBlur && onBlur();
    }, 100);
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (typeof setSearchResults === "function") {
      if (value) {
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
            .startAt(value)
            .endAt(value + "\uf8ff")
            .once("value");

          const data = snapshot.val();
          if (data) {
            const categoryResults = Object.entries(data).map(
              ([key, value]) => ({ key, ...value, category })
            );
            results = [...results, ...categoryResults];
          }
        }

        console.log("Search results:", results);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleSearchClick = () => {
    document.querySelector(".search-input").focus();
    handleInputChange({ target: { value: inputValue } });
  };

  const handleBtnReset = () => {
    console.log("Reset button clicked");
    setInputValue("");
    setSearchResults([]);
    setInputFocused(false);
  };

  return (
    <div className={`search-bar ${isInputFocused ? "input-focused" : ""}`}>
      <div
        className={`icon-starts-search-div ${
          !isInputFocused ? "visible" : "hidden"
        }`}
        onClick={handleSearchClick}
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
