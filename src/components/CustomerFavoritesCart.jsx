import "./CustomerFavoritesCart.scss";
import CardYouMightLike from "../UI/Cards/CardYouMightLike";
/* import for covers */

import roseTerraceCover from "../assets/img/other-members/albums/rose-terrace.jpg";
import loneRiderCover from "../assets/img/other-members/albums/lone-rider-album.jpg";
import dreamchaser2Cover from "../assets/img/single-collection-albums/dream-chaser-2.jpg";
import flashback2001Cover from "../assets/img/coversMini/albums/flashback_from_2001-mini.jpg";

export default function CustomerFavoritesCart() {
  const itemsData = [
    {
      imgItem: loneRiderCover,
      titleItem: "Album Lone Rider",
      titleArtist: "Jackie Ras",
      priceItem: "9.99",
    },
    {
      imgItem: roseTerraceCover,
      titleItem: "Album Rose Terrace",
      titleArtist: "Molly Granoli",
      priceItem: "8.49",
    },

    {
      imgItem: dreamchaser2Cover,
      titleItem: "Album Collectors Dreamchasers II",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
    {
      imgItem: flashback2001Cover,
      titleItem: "Album Flashback From 2001",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
  ];

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h4 className="h-youMightLike-cart">Customer favorites</h4>
        <ul className="ul-list-youMightLike-cart">
          {/* maping all items from the array */}
          {itemsData.map((item, index) => (
            <li className="li-youMightLike-cart" key={index}>
              <CardYouMightLike {...item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
