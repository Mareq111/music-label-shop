import "./ContentProductDetails.scss";
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo.jsx";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor.jsx";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice.js";
import prodData from "../data/prodData.js";

export default function ContentProductDetails() {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
  };
  //redux add data to cart
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(prodData));
  };

  return (
    <div className="div-content-text-all">
      <BadgeTitlePriceAuthor
        itemTitle={prodData.itemTitle}
        itemPrice={prodData.itemPrice}
        itemAuthor={prodData.itemAuthor}
      />
      <BadgeRatingProductInfo
        overallRating={prodData.overallRating}
        numberOfReviews={prodData.numberOfReviews}
      />
      {/* {console.log("prodData:", prodData.itemTitle)} */}
      <ChooserVersionRadio
        prodData={prodData}
        onVersionChange={handleVersionChange}
      />
      <BtnAddToCart
        item={{ ...prodData, radioId: radioId }}
        selectedVersion={selectedVersion}
        onClick={handleAddToCart}
      />
      <BadgesProductDetails />
      <TextProductDescription />
      <span className="hidden-textSongs-560px">
        <TextSongsOnAlbum songs={prodData.songs} />
      </span>

      <AccordionsProductDetails />
    </div>
  );
}
