/* eslint-disable no-unused-vars */
/* import "./ProductDetails.scss";
import ContentProductDetails from "../components/ContentProductDetails";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import YouMightLike from "../components/YouMightLike";
import BadgeIdAndArrowBack from "../UI/Badge/BadgeIdAndArrowBack";
import { useParams, useLocation } from "react-router-dom";
export default function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();
  const productIdFromState = location.state ? location.state.productId : null;
  return (
    <section className="all_sections__product">
      section images with description which is on the left side then > 500px screen
      <section className="section-1__left-side">
        bagde with id of product and arrow back btn 
        <BadgeIdAndArrowBack productId={productId} />
     
        <ContentProductDetailsLeftSide />
      </section>
      section with content which is on the right side then > 500px screens
      <section className="section-2__right-side">
        <ContentProductDetails />
      </section>
       section you might like equals similar products  
      <section className="section-youMightLike">
        <YouMightLike />
      </section>
    </section>
  );
} */

/* eslint-disable no-unused-vars */
/*   import "./ProductDetails.scss";
import ContentProductDetails from "../components/ContentProductDetails";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import YouMightLike from "../components/YouMightLike";
import BadgeIdAndArrowBack from "../UI/Badge/BadgeIdAndArrowBack";
import { useParams, useLocation } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();
  const productIdFromState = location.state ? location.state.productId : null;

  return (
    <section className="all_sections__product">
{/*    //     section images with description which is on the left side then > 500px screens* 
      <section className="section-1__left-side">
        bagde with id of product and arrow back btn  
        <BadgeIdAndArrowBack productId={productId} />
     
        <ContentProductDetailsLeftSide />
      </section>
    section with content which is on the right side then > 500px screens  
      <section className="section-2__right-side">
        <ContentProductDetails />
      </section>
     {/*  //  section you might like equals similar products  
      <section className="section-youMightLike">
        <YouMightLike />
      </section>
    </section>
  );
} 
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import BadgeIdAndArrowBack from "../UI/Badge/BadgeIdAndArrowBack";
import ContentProductDetails from "../components/ContentProductDetails";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import "./ProductDetails.scss";
import YouMightLike from "../components/YouMightLike";
/* import { useParams, useLocation } from "react-router-dom"; */

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchDataFromFirebase = async (category) => {
      try {
        const snapshot = await firebase
          .database()
          /* dynamic category paths */
          .ref(`categories/${category}/products/${productId}`)
          .once("value");
        const dataFromFirebase = snapshot.val();
        setProductData((prevData) => prevData || dataFromFirebase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    /*    fetchDataFromFirebase();
  }, [productId]);  */

    //!calling a function for any 'page'
    fetchDataFromFirebase("tickets");
    fetchDataFromFirebase("albums");
    fetchDataFromFirebase("gadgets");
    fetchDataFromFirebase("posters");
    fetchDataFromFirebase("puzzles");
    fetchDataFromFirebase("t-shirts");
  }, [productId]);
  useEffect(() => {
    // scroll to top if change product
    window.scrollTo(0, 0);
  }, [productId]);
  console.log("productData:", productData);
  return (
    <section className="all_sections__product">
      {productData && (
        <>
          <section className="section-1__left-side">
            <BadgeIdAndArrowBack productId={productId} />

            <ContentProductDetailsLeftSide productData={productData} />
          </section>
          <section className="section-2__right-side">
            <ContentProductDetails productData={productData} />
          </section>

          <section className="section-youMightLike">
            <YouMightLike />
          </section>
        </>
      )}
    </section>
  );
}
