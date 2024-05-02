/* import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import prodData from "../data/prodData";
import "./ContentProductDetailsLeftSide.scss";
import ImgProductDetails from "./ImgProductDetails";

export default function ContentProductDetailsLeftSide() {
  return (
    <article className="content-product-details__left">
      {/*  images of any product  
      <div className="images-of-product-div">
        <ImgProductDetails />
      </div>
        text hidden if  screen is less than 560px  
      <div className="content-left-side-text-hidden">
        <TextSongsOnAlbum songs={prodData.songs} />
      </div>
    </article>
  );
}
 */
/* eslint-disable react/prop-types */
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import "./ContentProductDetailsLeftSide.scss";
import ImgProductDetails from "./ImgProductDetails";

export default function ContentProductDetailsLeftSide({ productData }) {
  return (
    <article className="content-product-details__left">
      {productData && (
        <>
          <div className="images-of-product-div">
            <ImgProductDetails productData={productData} />
          </div>
          {/*  text hidden if  screen is less than 560px    */}
          <div className="content-left-side-text-hidden">
            <TextSongsOnAlbum albumKey={productData.key} />
          </div>
        </>
      )}
    </article>
  );
}
