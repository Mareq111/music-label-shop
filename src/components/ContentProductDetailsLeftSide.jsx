import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import prodData from "../data/prodData";
import "./ContentProductDetailsLeftSide.scss";
import ImgProductDetails from "./ImgProductDetails";

export default function ContentProductDetailsLeftSide() {
  return (
    <article className="content-product-details__left">
      {/*  images of any product  */}
      <div className="images-of-product-div">
        <ImgProductDetails />
      </div>
      {/*  text hidden if  screen is less than 560px  */}
      <div className="content-left-side-text-hidden">
        <TextSongsOnAlbum songs={prodData.songs} />
      </div>
    </article>
  );
}
