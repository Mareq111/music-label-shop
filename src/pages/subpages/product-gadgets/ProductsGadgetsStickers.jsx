import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../../../firebaseConfig";
import CardProductMain from "../../../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../../../UI/Buttons/BtnToggleView.jsx";
import BadgePreciseGadgets from "../../../UI/Badge/BadgePreciseGadgets.jsx";
import "../../ProductsAllPages.scss";
import { Link } from "react-router-dom";

export default function ProductsGadgetsStickers() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);
  //!state for selected item  set = Stickers
  const [selectedItem, setSelectedItem] = useState("Stickers");

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // download data for the selected item
    const fetchProductsData = async () => {
      try {
        //! only gadgets items
        let ref = firebase.database().ref("categories/gadgets/products");
        if (selectedItem) {
          ref = ref.orderByChild("itemTitle").equalTo(selectedItem);
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
    // Fetch data whenever selecteditem changes
    fetchProductsData();
  }, [selectedItem]); // Dependency array

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  const handleItemSelection = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Gadgets</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
        {/* Choose precise item  */}
        <div className="div-badge-precise-something">
          <BadgePreciseGadgets onSelectItem={handleItemSelection} />
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
