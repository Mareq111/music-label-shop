import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../firebaseConfig";
import CardProductMain from "../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../UI/Buttons/BtnToggleView.jsx";
import "./ProductsAllPages.scss";
import BadgePrecisePuzzles from "../UI/Badge/BadgePrecisePuzzles.jsx";

export default function ProductsPuzzles() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);
  //!state for selected itemLevel  set = all
  const [selectedItemLevel, setSelectedItemLevel] = useState("");

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // download data for the selected ItemLevel
    const fetchProductsData = async () => {
      try {
        //! only tickets items
        let ref = firebase.database().ref("categories/puzzles/products");
        if (selectedItemLevel) {
          ref = ref.orderByChild("itemLevel").equalTo(selectedItemLevel);
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
    // Fetch data whenever selectedItemLevel changes
    fetchProductsData();
  }, [selectedItemLevel]); // Dependency array

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  const handleItemLevelSelection = (itemLevel) => {
    setSelectedItemLevel(itemLevel);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Puzzles</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
        {/*  Choose precise itemLevel   */}
        <div className="div-badge-precise-something">
          <BadgePrecisePuzzles onSelectItemLevel={handleItemLevelSelection} />
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
