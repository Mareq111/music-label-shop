import React from "react";
import "./YouMightLike.scss";
import CardYouMightLike from "../UI/Cards/CardYouMightLike";
/* import for covers */

import arenaCover from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import flashback2001Cover from "../assets/img/coversMini/albums/flashback_from_2001-mini.jpg";
import roseTerraceCover from "../assets/img/other-members/albums/rose-terrace.jpg";
import intoToDiffCover from "../assets/img/other-members/albums/into-to-different-dimension.jpg";
import loneRiderCover from "../assets/img/other-members/albums/lone-rider-album.jpg";
import dreamchaser2Cover from "../assets/img/single-collection-albums/dream-chaser-2.jpg";
export default function YouMightLike() {
  const itemsData = [
    {
      imgItem: arenaCover,
      titleItem: "Album Arena Of Autumnn EP",
      titleArtist: "El Double M",
      priceItem: "7.99",
    },
    {
      imgItem: flashback2001Cover,
      titleItem: "Album Flashback From 2001",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
    {
      imgItem: roseTerraceCover,
      titleItem: "Album Rose Terrace",
      titleArtist: "Molly Granoli",
      priceItem: "8.49",
    },
    {
      imgItem: intoToDiffCover,
      titleItem: "Album Into To Different Dimension",
      titleArtist: "Molly Granoli",
      priceItem: "8.99",
    },
    {
      imgItem: loneRiderCover,
      titleItem: "Album Lone Rider",
      titleArtist: "Jackie Ras",
      priceItem: "9.99",
    },
    {
      imgItem: dreamchaser2Cover,
      titleItem: "Album Collectors Dreamchasers II",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
  ];

  return (
    <article className="you-might-like">
      <div className="div-youMightLike">
        <h4 className="h-youMightLike">You may also like</h4>
        <ul className="ul-list-youMightLike">
          {/* maping all items from the array */}
          {itemsData.map((item, index) => (
            <li className="li-youMightLike" key={index}>
              <CardYouMightLike {...item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
