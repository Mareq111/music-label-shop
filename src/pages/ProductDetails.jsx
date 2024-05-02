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

/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor";

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const snapshot = await firebase
          .database()
           .ref(`categories/albums/products/album01`) 
         

          .once("value");
        const dataFromFirebase = snapshot.val();
        setProductData(dataFromFirebase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  return (
    <div>

      {productData && (
        <>
          <BadgeTitlePriceAuthor {...productData} />
        </>
      )}
    </div>
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

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref(`categories/albums/products/${productId}`)
          .once("value");
        const dataFromFirebase = snapshot.val();
        setProductData(dataFromFirebase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [productId]);

  return (
    <div>
      {/* badge with id of product and arrow back btn  */}
      <BadgeIdAndArrowBack productId={productId} />
      {/* show data for details page which is devided for 2 huge components*/}
      {productData && (
        <>
       
          <ContentProductDetailsLeftSide productData={productData} />
          <ContentProductDetails productData={productData} />
        </>
      )}
    </div>
  );
}
