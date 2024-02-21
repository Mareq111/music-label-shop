import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
import ImgProductDetails from ".././components/ImgProductDetails";
import ContentProductDetails from "../components/ContentProductDetails";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import TextProductDescription from "../UI/Text/TextProductDescription";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import YouMightLike from "../components/YouMightLike";
export default function ProductDetails() {
  const params = useParams();

  return (
    <section className="all_sections__product">
      {/* section images with description which is on the left side then > 500px screens*/}
      <section className="section-1__left-side">
        <div>
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
        </div>
        {/*   <ImgProductDetails /> */}
        <ContentProductDetailsLeftSide />
      </section>
      {/* section with content which is on the right side then > 500px screens*/}
      <section className="section-2__right-side">
        <ContentProductDetails />
      </section>
      {/* other eg slider  */}
      <div className="section-youMightLike">
        <YouMightLike />
      </div>
    </section>
  );
}
