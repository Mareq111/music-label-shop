import { useState } from "react";
import CardProductMain from "../UI/Cards/CardProductMain";
import BtnToggleView from "../UI/Buttons/BtnToggleView.jsx";
import "./Products.scss";

export default function Products() {
  const [layoutView, setLayoutView] = useState("grid");

  const productsData = [
    {
      imgItem:
        "../../src/assets/img/coversMini/albums-collectors/dream-chaser-1-mini.jpg",
      titleItem: "Album Dream Chaser",
      titleArtist: "El Double M",
      priceItem: 19.99,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums-collectors/dream-chaser-2-mini.jpg",
      titleItem: "Album Dream Chaser 2",
      titleArtist: "El Double M",
      priceItem: 24.59,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums-collectors/dream-chaser-3-mini.jpg",
      titleItem: "Album Dream Chaser 3",
      titleArtist: "El Double M",
      priceItem: 34.59,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg",
      titleItem: "Album Arena Of Autumnn EP",
      titleArtist: "El Double M",
      priceItem: 14.99,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums/initial-confusion-mini.jpg",
      titleItem: "Album Initial Confusion",
      titleArtist: "El Double M",
      priceItem: 12.99,
    },
  ];

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  return (
    <article className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Albums</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>

        <ul
          className={`ul-list-productsMain ${
            layoutView === "grid" ? "ul-list-productsMain--grid" : ""
          } ${layoutView === "list" ? "ul-list-productsMain--list" : ""}`}
        >
          {productsData.map((item, index) => (
            <li className="li-productsMain" key={index}>
              {layoutView === "grid" ? (
                <CardProductMain {...item} layout="grid" />
              ) : (
                <CardProductMain {...item} layout="list" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
