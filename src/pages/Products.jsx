import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="content-prod">
      <p>
        link <Link to="/">link to</Link>
      </p>
    </div>
  );
}
