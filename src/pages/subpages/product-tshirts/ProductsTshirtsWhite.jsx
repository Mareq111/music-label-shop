import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../../../firebaseConfig";
import CardProductMain from "../../../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../../../UI/Buttons/BtnToggleView.jsx";
import BadgePreciseTshirts from "../../../UI/Badge/BadgePreciseTshirts.jsx";
import "../../ProductsAllPages.scss";
import { Link } from "react-router-dom";

export default function ProductsTshirtsWhite() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);
  //!state for selected color  set = White
  const [selectedcolor, setSelectedcolor] = useState("White");

  //always looking for page starts on their top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // download data for the selected color
    const fetchProductsData = async () => {
      try {
        //! only tickets items
        let ref = firebase.database().ref("categories/t-shirts/products");
        if (selectedcolor) {
          ref = ref.orderByChild("color").equalTo(selectedcolor);
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
    // Fetch data whenever selectedcolor changes
    fetchProductsData();
  }, [selectedcolor]); // Dependency array

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  const handlecolorSelection = (color) => {
    setSelectedcolor(color);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">T-shirts</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
        {/*  Choose precise color   */}
        <div className="div-badge-precise-something">
          <BadgePreciseTshirts onSelectcolor={handlecolorSelection} />
        </div>
        <ul
          className={`ul-list-productsMain ${
            layoutView === "grid" ? "ul-list-productsMain--grid" : ""
          } ${layoutView === "list" ? "ul-list-productsMain--list" : ""}`}
        >
          {productsData.map((item) => (
            <li className="li-productsMain" key={item.key}>
              <Link className="class-link-focus-pages" to={`/${item.key}`}>
                <CardProductMain product={item} layout={layoutView} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
