

import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";
import { Link } from "react-router-dom";

export default function CustomerFavoritesCart() {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isGrid, setIsGrid] = useState(window.innerWidth >= 425);
  useEffect(() => {
    const fetchFavoritesFromFirebase = async () => {
      try {
        const categories = [
          "albums",
          "gadgets",
          "posters",
          "puzzles",
          "t-shirts",
          "tickets",
        ];

        const fetchProductsByCategory = async (category) => {
          const snapshot = await firebase
            .database()
            .ref(`categories/${category}/products`)
            .once("value");
          const productsData = snapshot.val();
          if (productsData) {
            return Object.values(productsData);
          }
          return [];
        };

        const allProducts = (
          await Promise.all(
            categories.map((category) => fetchProductsByCategory(category))
          )
        ).flat();

        const selectedProducts = [];
        while (selectedProducts.length < 4 && allProducts.length > 0) {
          const randomIndex = Math.floor(Math.random() * allProducts.length);
          const selectedProduct = allProducts.splice(randomIndex, 1)[0];
          selectedProducts.push(selectedProduct);
        }

        setFavoritesData(selectedProducts);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchFavoritesFromFirebase();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsGrid(window.innerWidth >= 425);
    };

    window.addEventListener("resize", handleResize);

    // set initial view
    handleResize();

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">Customer favorites</h3>
        <ul className="ul-list-youMightLike-cart">
          {favoritesData.length > 0 ? (
            favoritesData.map((product, index) => (
              <li className="li-youMightLike-cart" key={index}>
                <Link className="link-you-might-like" to={`/${product.key}`}>
                  <CardProductMain
                    product={product}
                    layout={isGrid ? "list" : "grid"}
                    customClass={window.innerWidth >= 768 ? "custom-width" : ""}
                  />
                </Link>
              </li>
            ))
          ) : (
            <li>
              <p>We are still looking for customer favorites...</p>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
