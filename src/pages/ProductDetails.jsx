import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
import ImgProductDetails from '.././components/ImgProductDetails';
import ContentProductDetails from "../components/ContentProductDetails";
export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      {/* section three images */}
      <section className="section__1-images">
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
        </section>
        <ImgProductDetails />
        <section className="section-2-text">
        <ContentProductDetails />
      </section>
    </>
  );
}
