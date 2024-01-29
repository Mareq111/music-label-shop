import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1 className="h1-details">product details</h1>
      <div className="div-name-of-item">
        <p className="name-of-item">{params.productId}</p>
      </div>
      <p>
        <Link to=".." relative="path">
          back to products
        </Link>
      </p>
    </>
  );
}
