
import "./ImgProductDetails.scss";
import MainImgProdDetails from "./../UI/Images/MainImgProdDetails";
import FirstImgProdDetails from "./../UI/Images/FirstImgProdDetails";
import SecondImgProdDetails from "./../UI/Images/SecondImgProdDetails";
import BtnHeart from "../UI/Buttons/BtnHeart";

export default function ImgProductDetails() {
  return (
    <>
      <div className="div-img-all">
        <div className="div-img-main">
          <MainImgProdDetails />
        </div>
            {/* Badge for adding to favorites */}
            <div className="badge">
           <BtnHeart/>
          </div>
      
          {/* Additional images */}
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