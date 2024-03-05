import React from "react";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import "./ContentProductDetailsLeftSide.scss";
import ImgProductDetails from "./ImgProductDetails";
export default function ContentProductDetailsLeftSide() {
  //test data to names songs
  const prodData = {
    itemTitle: "Album Wave CD",
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
  return (
    <article className="content-product-details__left">
      {/* images of any product */}
      <div className="images-of-product-div">
        <ImgProductDetails />
      </div>
      {/* text hidden if  screen is less than 560px */}
      <div className="content-left-side-text-hidden">
        <TextSongsOnAlbum songs={prodData.songs} />
      </div>
    </article>
  );
}
