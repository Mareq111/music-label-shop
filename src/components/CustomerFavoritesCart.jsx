/* import "./CustomerFavoritesCart.scss";
import CardYouMightLike from "../UI/Cards/CardYouMightLike";


import roseTerraceCover from "../assets/img/other-members/albums/rose-terrace.jpg";
import loneRiderCover from "../assets/img/other-members/albums/lone-rider-album.jpg";
import dreamchaser2Cover from "../assets/img/single-collection-albums/dream-chaser-2.jpg";
import flashback2001Cover from "../assets/img/coversMini/albums/flashback_from_2001-mini.jpg";

export default function CustomerFavoritesCart() {
  const itemsData = [
    {
      imgItem: loneRiderCover,
      titleItem: "Album Lone Rider",
      titleArtist: "Jackie Ras",
      priceItem: "9.99",
    },
    {
      imgItem: roseTerraceCover,
      titleItem: "Album Rose Terrace",
      titleArtist: "Molly Granoli",
      priceItem: "8.49",
    },

    {
      imgItem: dreamchaser2Cover,
      titleItem: "Album Collectors Dreamchasers II",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
    {
      imgItem: flashback2001Cover,
      titleItem: "Album Flashback From 2001",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
  ];

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">Customer favorites</h3>
        <ul className="ul-list-youMightLike-cart">
          maping all items from the array 
          {itemsData.map((item, index) => (
            <li className="li-youMightLike-cart" key={index}>
              <CardYouMightLike {...item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
} */
/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";

export default function CustomerFavoritesCart() {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    const fetchFavoritesFromFirebase = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("customerFavorites")
          .once("value");
        const favoritesDataFromFirebase = snapshot.val();
        if (favoritesDataFromFirebase) {
          const favoritesArray = Object.values(favoritesDataFromFirebase);
          setFavoritesData(favoritesArray);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchFavoritesFromFirebase();
  }, []);

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">Customer favorites</h3>
        <ul className="ul-list-youMightLike-cart">
          {/* Mapping all items from the array
          {favoritesData.map((item, index) => (
            <li className="li-youMightLike-cart" key={index}>
               <CardProductMain product={item} layout={"grid"} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
 */

/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";

export default function CustomerFavoritesCart() {
  const [favoritesData, setFavoritesData] = useState([]);

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
            const productKeys = Object.keys(productsData);
            const randomProductKeys = [];
            while (randomProductKeys.length < 4) {
              const randomKey =
                productKeys[Math.floor(Math.random() * productKeys.length)];
              if (!randomProductKeys.includes(randomKey)) {
                randomProductKeys.push(randomKey);
              }
            }
            return randomProductKeys.map((key) => productsData[key]);
          }
          return [];
        };

        const favoritesArray = await Promise.all(
          categories.map((category) => fetchProductsByCategory(category))
        );

        setFavoritesData(favoritesArray.flat());
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchFavoritesFromFirebase();
  }, []);

  return (
    <article className="you-might-like-cart">
      <div className="div-youMightLike-cart">
        <h3 className="h-youMightLike-cart">Customer favorites</h3>
        <ul className="ul-list-youMightLike-cart">
          {favoritesData.map((item, index) => (
            <li className="li-youMightLike-cart" key={index}>
              <CardProductMain product={item} layout={"list"} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
} */

import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./CustomerFavoritesCart.scss";
import CardProductMain from "../UI/Cards/CardProductMain";

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
            favoritesData.map((item, index) => (
              <li className="li-youMightLike-cart" key={index}>
                {/*   {isGrid ? (
                  <CardProductMain product={item} layout={"list"} />
                ) : (
                  <CardProductMain product={item} layout={"grid"} />
                )} */}
                <CardProductMain
                  product={item}
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
