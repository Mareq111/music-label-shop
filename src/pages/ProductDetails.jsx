import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
import ImgProductDetails from "../components/TopNav/ImgProductDetails";
export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <section className="section__1-up">
        <div className="div-temporary">
          <h1 className="h1-details">product details</h1>
          <div className="div-name-of-item">
            <p className="name-of-item">{params.productId}</p>
          </div>
          <p>
            <Link to=".." relative="path">
              back to products
            </Link>
          </p>
        </div>

        <ImgProductDetails />
      </section>
    </>
  );
}
