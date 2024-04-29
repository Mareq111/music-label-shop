/* eslint-disable react/prop-types */

import "./ImgProductDetails.scss";
import MainImgProdDetails from "./../UI/Images/MainImgProdDetails";
import SecondImgProdDetails from "./../UI/Images/SecondImgProdDetails";
import BtnHeart from "../UI/Buttons/BtnHeart";
import ThirdImgProdDetails from "../UI/Images/ThirdImgProdDetails";
export default function ImgProductDetails() {
  return (
    <>
      <div className="div-img-all">
        <div className="div-img-main">
          <MainImgProdDetails />
        </div>
        <div className="badge">
          <BtnHeart />
        </div>
        <div className="div-img-bottom-all">
          <div className="div-img-bottom">
            <ThirdImgProdDetails />
            <SecondImgProdDetails />
          </div>
        </div>
      </div>
    </>
  );
}
 