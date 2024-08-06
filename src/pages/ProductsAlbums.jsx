 import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../firebaseConfig";
import BadgePreciseAlbums from "../UI/Badge/BadgePreciseAlbums.jsx";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../UI/Buttons/BtnToggleView.jsx";
import "./ProductsAllPages.scss";
import { Link } from "react-router-dom";

export default function ProductsAlbums() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);
  //!state for selected artist  set = all
  const [selectedArtist, setSelectedArtist] = useState("");

  //always looking for page starts on their top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // download data for the selected artist
    const fetchProductsData = async () => {
      try {
        //! only albums items
        let ref = firebase.database().ref("categories/albums/products");
        if (selectedArtist) {
          ref = ref.orderByChild("titleArtist").equalTo(selectedArtist);
        }
        const snapshot = await ref.once("value");
        const data = snapshot.val();
        // change object into array
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
    // Fetch data whenever selectedArtist changes
    fetchProductsData();
  }, [selectedArtist]); // Dependency array

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  const handleArtistSelection = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Albums</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
      {/*   Choose precise artist  */}
        <div className="div-badge-precise-something">
          <BadgePreciseAlbums onSelectArtist={handleArtistSelection} />
        </div>
        <ul
          className={`ul-list-productsMain ${
            layoutView === "grid" ? "ul-list-productsMain--grid" : ""
          } ${layoutView === "list" ? "ul-list-productsMain--list" : ""}`}
        >
          {productsData.map((item) => (
            <li className="li-productsMain" key={item.key}>
              <Link to={`/${item.key}`}>
                <CardProductMain product={item} layout={layoutView} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 


