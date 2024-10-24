/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Slider from "react-slick";
import "./CardCustomerFavHomepage.scss";
import CardProductMain from "../../UI/Cards/CardProductMain";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCustomerFavHomepage({ titleSection }) {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isGrid, setIsGrid] = useState(window.innerWidth >= 425);
  const [layoutView, setLayoutView] = useState("grid"); //list starts at 1024

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, //2
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <article className="you-might-like-homepage">
      <div className="div-youMightLike-homepage">
        <h3 className="h-youMightLike-homepage">
          {/* Customer favorites */} {titleSection}
        </h3>
        {favoritesData.length > 0 ? (
          <Slider className="slider-homepage" {...settings}>
            {favoritesData.map((product, index) => (
              <li className="li-youMightLike-homepage" key={index}>
                <Link
                  className="link-you-might-like-homepage"
                  to={`/${product.key}`}
                >
                  <CardProductMain
                    layout={layoutView}
                    product={product}
                    tabIndex={0}
                  />
                </Link>
              </li>
            ))}
          </Slider>
        ) : (
          <p>We are still looking for customer favorites...</p>
        )}
      </div>
    </article>
  );
}
