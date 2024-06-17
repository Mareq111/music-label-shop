/* eslint-disable react/prop-types */


import { useState } from "react";
import "./ContentProductDetails.scss";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo";
import BadgesProductDetails from "./BadgesProductDetails";
import ChooserVersionRadio from "./ChooserVersionRadio";
import BtnAddToCart from "../UI/Buttons/BtnAddToCart";
import TextProductDescription from "../UI/Text/TextProductDescription";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum.jsx";
/* import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice.js"; */

export default function ContentProductDetails({ productData }) {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
  };

  return (
    <div className="div-content-text-all">
      {productData && (
        <>
          <BadgeTitlePriceAuthor
            titleItem={productData.titleItem}
            priceItem={productData.priceItem}
            //dynamic title depends on which product are choosen
            titleArtist={
              productData.titleArtist ||
              productData.location ||
              productData.color ||
              productData.itemTitle ||
              productData.itemLevel
            }
          />
          <BadgeRatingProductInfo commentsData={productData.commentsData} />
          <ChooserVersionRadio
            productData={productData}
            onVersionChange={handleVersionChange}
          />
          <BtnAddToCart
            item={{ ...productData, radioId }}
            selectedVersion={selectedVersion}
            priceItem={productData.priceItem}
            onAddToCart={() => console.log("Item added to cart")}
          />
          <BadgesProductDetails />
          <TextProductDescription
            productDescription={productData.productDescription}
          />
          <span className="hidden-textSongs-560px">
            <TextSongsOnAlbum albumKey={productData.key} />
          </span>
          <AccordionsProductDetails productData={productData} />
        </>
      )}
    </div>
  );
}
