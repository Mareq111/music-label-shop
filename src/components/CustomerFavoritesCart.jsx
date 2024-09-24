/* eslint-disable react/prop-types */

/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../store/cartSlice"; // Import closeCart

export default function CustomerFavoritesCart({ titleCard }) {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isGrid, setIsGrid] = useState(window.innerWidth >= 425);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleCardClick = (product) => {
    //close cart
    dispatch(closeCart());
    navigate(`/${product.key}`);
  };

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">{titleCard}</h3>
        <ul className="ul-list-youMightLike-cart">
          {favoritesData.length > 0 ? (
            favoritesData.map((product, index) => (
              <li
                className="li-youMightLike-cart "
                key={index}
                onClick={() => handleCardClick(product)}
              >
                <Link className="class-link-focus-pages">
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
 */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../store/cartSlice"; // Import closeCart

export default function CustomerFavoritesCart({ titleCard }) {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isGrid, setIsGrid] = useState(window.innerWidth >= 425);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleCardClick = (product) => {
    //close cart
    dispatch(closeCart());
    navigate(`/${product.key}`);
  };

  const handleKeyDown = (event, product) => {
    if (event.key === "Enter") {
      handleCardClick(product);
    }
  };

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">{titleCard}</h3>
        <ul className="ul-list-youMightLike-cart">
          {favoritesData.length > 0 ? (
            favoritesData.map((product, index) => (
              <li
                className="li-youMightLike-cart class-link-focus-pages"
                key={index}
                tabIndex={0}
                onClick={() => handleCardClick(product)}
                onKeyDown={(event) => handleKeyDown(event, product)}
              >
                <CardProductMain
                  product={product}
                  layout={isGrid ? "list" : "grid"}
                  customClass={window.innerWidth >= 768 ? "custom-width" : ""}
                />
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
