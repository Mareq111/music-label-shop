/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import BadgeIdAndArrowBack from "../UI/Badge/BadgeIdAndArrowBack";
import ContentProductDetails from "../components/ContentProductDetails";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import "./ProductDetails.scss";
import YouMightLike from "../components/YouMightLike";

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        //categories on store with products
        const categories = [
          "albums",
          "gadgets",
          "posters",
          "puzzles",
          "t-shirts",
          "tickets",
        ];

        //download data for various categories and search product with searching id
        for (const category of categories) {
          const snapshot = await firebase
            .database()
            .ref(`categories/${category}/products/${productId}`)
            .once("value");
          const dataFromFirebase = snapshot.val();

          //if find product , set data
          if (dataFromFirebase) {
            setProductData(dataFromFirebase);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [productId]);

  useEffect(() => {
    // scroll to top if change product
    window.scrollTo(0, 0);
  }, [productId]);

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
