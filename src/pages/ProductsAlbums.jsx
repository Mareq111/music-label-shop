import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../firebaseConfig";
import BadgePreciseAlbums from "../UI/Badge/BadgePreciseAlbums.jsx";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../UI/Buttons/BtnToggleView.jsx";

export default function ProductsAlbums() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    //download data
    const fetchProductsData = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("categories/albums/products")
          .once("value");
        const data = snapshot.val();
        //change object into array
        if (data) {
          const productsArray = Object.entries(data).map(([key, value]) => ({
            key: key,
            ...value,
          }));
          setProductsData(productsArray);
        }
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };
    fetchProductsData();
  }, []);

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Albums</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
        {/*  choose precise whos something you looking for  */}
        <div className="div-badge-precise-something">
          <BadgePreciseAlbums />
        </div>
        <ul
          className={`ul-list-productsMain ${
            layoutView === "grid" ? "ul-list-productsMain--grid" : ""
          } ${layoutView === "list" ? "ul-list-productsMain--list" : ""}`}
        >
          {productsData.map((item) => (
            <li className="li-productsMain" key={item.key}>
              <CardProductMain product={item} layout={layoutView} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
