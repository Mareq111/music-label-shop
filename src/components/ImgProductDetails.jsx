/* eslint-disable react/prop-types */

/* import "./ImgProductDetails.scss";
import MainImgProdDetails from "./../UI/Images/MainImgProdDetails";
import SecondImgProdDetails from "./../UI/Images/SecondImgProdDetails";
import BtnHeart from "../UI/Buttons/BtnHeart";
import ThirdImgProdDetails from "../UI/Images/ThirdImgProdDetails";

export default function ImgProductDetails({ productData }) {
  console.log("Product Data:", productData);

  return (
    <div className="div-img-all">
      <div className="div-img-main">
        <MainImgProdDetails imgURL={productData.imgURL} />
      </div>
      <div className="badge">
        <BtnHeart product={productData} />
      </div>
      <div className="div-img-bottom-all">
        <div className="div-img-bottom">
          <SecondImgProdDetails imgSecondURL={productData.imgSecondURL} />
          <ThirdImgProdDetails imgThirdURL={productData.imgThirdURL} />
        </div>
      </div>
    </div>
  );
} */
import "./ImgProductDetails.scss";
import MainImgProdDetails from "./../UI/Images/MainImgProdDetails";
import SecondImgProdDetails from "./../UI/Images/SecondImgProdDetails";
import BtnHeart from "../UI/Buttons/BtnHeart";
import ThirdImgProdDetails from "../UI/Images/ThirdImgProdDetails";

export default function ImgProductDetails({ productData }) {
  console.log("Product Data:", productData);

  return (
    <div className="div-img-all">
      <div className="div-img-main">
        <MainImgProdDetails imgURL={productData.imgURL} />
      </div>
      <div className="badge">
        <BtnHeart product={productData} />
      </div>
      <div className="div-img-bottom-all">
        <div className="div-img-bottom">
          <SecondImgProdDetails imgSecondURL={productData.imgSecondURL} />
          {/* Render third component if 3 img are available  */}
          {productData.imgThirdURL && (
            <ThirdImgProdDetails imgThirdURL={productData.imgThirdURL} />
          )}
        </div>
      </div>
    </div>
  );
}
