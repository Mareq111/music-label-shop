import React from "react";
import "./BtnGoToCategories.scss";
import { Link } from "react-router-dom";

export default function BtnGoToCategories({ categoryPath, nameOfCategory }) {
  return (
    <Link
      className="link-go-to-categories"
      to={categoryPath}
      aria-label={`Go to ${nameOfCategory}`}
    >
      <button className="btn-go-to-categories" type="button">
        {nameOfCategory}
      </button>
    </Link>
  );
}
