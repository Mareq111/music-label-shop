import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "../../../firebaseConfig.js";
import CardProductMain from "../../../UI/Cards/CardProductMain.jsx";
import BtnToggleView from "../../../UI/Buttons/BtnToggleView.jsx";
import BadgePreciseTickets from "../../../UI/Badge/BadgePreciseTickets.jsx";
import "../../ProductsAllPages.scss";
import { Link } from "react-router-dom";

export default function ProductsTicketsBelgium() {
  const [layoutView, setLayoutView] = useState("grid");
  const [productsData, setProductsData] = useState([]);
  //!state for selected country  set = Belgium
  const [selectedCountry, setSelectedCountry] = useState("Belgium");


  //always looking for page starts on their top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // download data for the selected country
    const fetchProductsData = async () => {
      try {
        //! only tickets items
        let ref = firebase.database().ref("categories/tickets/products");
        if (selectedCountry) {
          ref = ref.orderByChild("country").equalTo(selectedCountry);
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
    // Fetch data whenever selectedCountry changes
    fetchProductsData();
  }, [selectedCountry]); // Dependency array

  const handleProductsLayout = (newLayout) => {
    setLayoutView(newLayout);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
  };

  return (
    <section className="section-product-page">
      <div className="products-page-container">
        <div className="h-and-change-view-products">
          <h4 className="h-products-page">Tickets</h4>
          <BtnToggleView onLayoutChange={handleProductsLayout} />
        </div>
        {/*  Choose precise country   */}
        <div className="div-badge-precise-something">
          <BadgePreciseTickets onSelectcountry={handleCountrySelection} />
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
