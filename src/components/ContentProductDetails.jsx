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

export default function ContentProductDetails() {
  const prodData = {
    itemTitle: "Album Wave",
    itemPrice: 12.99,
    itemAuthor: "El Double M",
    overallRating: 4.5,
    numberOfReviews: 4,
    songs: [
      { numberOfSong: 1, songTitle: "Enjoy" },
      { numberOfSong: 2, songTitle: "Row Your Boat" },
      { numberOfSong: 3, songTitle: "Neon Soul" },
      { numberOfSong: 4, songTitle: "Przesmyk" },
      { numberOfSong: 5, songTitle: "Somewhere In Time" },
      { numberOfSong: 6, songTitle: "Steamship" },
      { numberOfSong: 7, songTitle: "Through The Lake" },
      { numberOfSong: 8, songTitle: "On A Delightful Cruise" },
    ],
  };
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
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
      <ChooserVersionRadio
        prodData={prodData}
        onVersionChange={handleVersionChange}
      />
      <BtnAddToCart
        item={{ ...prodData, radioId: radioId }}
        selectedVersion={selectedVersion}
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
