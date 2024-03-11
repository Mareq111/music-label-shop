import CardProductMain from "../UI/Cards/CardProductMain";
import "./Products.scss";
import IconGridView from "../UI/Icons/IconGridView.jsx";
import IconListView from "../UI/Icons/IconListView.jsx";

export default function Products() {
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
      priceItem: 24.5,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums-collectors/dream-chaser-3-mini.jpg",
      titleItem: "Album Dream Chaser 3",
      titleArtist: "El Double M",
      priceItem: 34.5,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg",
      titleItem: "Album Arena Of Autumnn EP",
      titleArtist: "El Double M",
      priceItem: 14.5,
    },
    {
      imgItem:
        "../../src/assets/img/coversMini/albums/initial-confusion-mini.jpg",
      titleItem: "Album Initial Confusion",
      titleArtist: "El Double M",
      priceItem: 12.5,
    },
  ];

  return (
    <article className="section-product-page">
      <div className="icons-view-chooser">
        <IconGridView />
        <IconListView />
      </div>
      <div className="products-page-container">
        <h4 className="h-products-page">Our Products</h4>
        <ul className="ul-list-productsMain">
          {/* maping all items from the array */}
          {productsData.map((item, index) => (
            <li className="li-productsMain" key={index}>
              <CardProductMain {...item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
