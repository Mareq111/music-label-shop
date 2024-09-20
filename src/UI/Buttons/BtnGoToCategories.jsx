/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BtnGoToCategories.scss";

export default function BtnGoToCategories({
  categoryPath,
  nameOfCategory,
  onClick,
}) {
  // state to manage the active state of the button
  const [active, setActive] = useState(false);
  // Hook to get the current location
  const location = useLocation();

  // effect to update the active state when the location changes, check if the current location matches the category path
  useEffect(() => {
    setActive(location.pathname === categoryPath);
  }, [location.pathname, categoryPath]);

  // Set the active state to true
  const handleClick = () => {
    setActive(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      className={`link-go-to-categories ${active ? "active" : ""}`}
      to={categoryPath}
      aria-label={`Go to ${nameOfCategory}`}
    >
      <button
        className={`btn-go-to-categories ${active ? "active" : ""}`}
        type="button"
        onClick={handleClick}
        tabIndex={0}
      >
        {nameOfCategory}
      </button>
    </Link>
  );
}
