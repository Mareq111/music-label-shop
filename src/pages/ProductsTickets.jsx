import { useState } from "react";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../UI/Buttons/BtnToggleView.jsx";
import "./ProductsAllPages.scss";
//import album covers
import ImgDreamChaser from "../assets/img/coversMini/albums-collectors/dream-chaser-1-mini.jpg";
import ImgDreamChaser2 from "../assets/img/coversMini/albums-collectors/dream-chaser-2-mini.jpg";
import ImgDreamChaser3 from "../assets/img/coversMini/albums-collectors/dream-chaser-3-mini.jpg";
import ImgArenaOfAutumnnEp from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import ImgInitialConfusion from "../assets/img/coversMini/albums/initial-confusion-mini.jpg";

export default function ProductsTickets() {
  const [layoutView, setLayoutView] = useState("grid");

  const productsData = [
    {
      imgItem: ImgDreamChaser,
      titleItem: "Album Dream Chaser",
      titleArtist: "El Double M",
      priceItem: 19.99,
    },
    {
      imgItem: ImgDreamChaser2,
      titleItem: "Album Dream Chaser 2",
      titleArtist: "El Double M",
      priceItem: 24.59,
    },
    {
      imgItem: ImgDreamChaser3,
      titleItem: "Album Dream Chaser 3",
      titleArtist: "El Double M",
      priceItem: 34.59,
    },
    {
      imgItem: ImgArenaOfAutumnnEp,
      titleItem: "Album Arena Of Autumnn EP",
      titleArtist: "El Double M",
      priceItem: 14.99,
    },
    {
      imgItem: ImgInitialConfusion,
      titleItem: "Album Initial Confusion",
      titleArtist: "El Double M",
      priceItem: 12.99,
    },
  ];

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Tickets</h4>
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
    </section>
  );
}
