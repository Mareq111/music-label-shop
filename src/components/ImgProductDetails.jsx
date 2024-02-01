import React from "react";
import "./ImgProductDetails.scss";
import MainImgProdDetails from "./../UI/Images/MainImgProdDetails";
import FirstImgProdDetails from "./../UI/Images/FirstImgProdDetails";
import SecondImgProdDetails from "./../UI/Images/SecondImgProdDetails";

export default function ImgProductDetails() {
  return (
    <>
      <div className="div-img-all">
        <div className="div-img-main">
          <MainImgProdDetails />
        </div>
        <div className="div-img-bottom-all">
          <div className="div-img-bottom">
            <FirstImgProdDetails />
            <SecondImgProdDetails />
          </div>
        </div>
      </div>
    </>
  );
}