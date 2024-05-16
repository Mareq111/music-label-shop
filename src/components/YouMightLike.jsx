/* eslint-disable no-unused-vars */
/* import "./YouMightLike.scss";
import CardYouMightLike from "../UI/Cards/CardYouMightLike";


import arenaCover from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import flashback2001Cover from "../assets/img/coversMini/albums/flashback_from_2001-mini.jpg";
import roseTerraceCover from "../assets/img/other-members/albums/rose-terrace.jpg";
import intoToDiffCover from "../assets/img/other-members/albums/into-to-different-dimension.jpg";
import loneRiderCover from "../assets/img/other-members/albums/lone-rider-album.jpg";
import dreamchaser2Cover from "../assets/img/single-collection-albums/dream-chaser-2.jpg";
export default function YouMightLike() {
  const itemsData = [
    {
      imgItem: arenaCover,
      titleItem: "Album Arena Of Autumnn EP",
      titleArtist: "El Double M",
      priceItem: "7.99",
    },
    {
      imgItem: flashback2001Cover,
      titleItem: "Album Flashback From 2001",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
    {
      imgItem: roseTerraceCover,
      titleItem: "Album Rose Terrace",
      titleArtist: "Molly Granoli",
      priceItem: "8.49",
    },
    {
      imgItem: intoToDiffCover,
      titleItem: "Album Into To Different Dimension",
      titleArtist: "Molly Granoli",
      priceItem: "8.99",
    },
    {
      imgItem: loneRiderCover,
      titleItem: "Album Lone Rider",
      titleArtist: "Jackie Ras",
      priceItem: "9.99",
    },
    {
      imgItem: dreamchaser2Cover,
      titleItem: "Album Collectors Dreamchasers II",
      titleArtist: "El Double M",
      priceItem: "11.99",
    },
  ];

  return (
    <article className="you-might-like">
      <div className="div-youMightLike">
        <h4 className="h-youMightLike">You may also like</h4>
        <ul className="ul-list-youMightLike">
           maping all items from the array 
          {itemsData.map((item, index) => (
            <li className="li-youMightLike" key={index}>
              <CardYouMightLike {...item} />
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
import CardYouMightLike from "../UI/Cards/CardYouMightLike";
import "./YouMightLike.scss";
import { Link } from "react-router-dom";

export default function YouMightLike() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const categories = [
          "albums",
          "gadgets",
          "posters",
          "puzzles",
          "t-shirts",
          "tickets",
        ];
        const productsPromises = categories.map((category) => {
          return firebase
            .database()
            .ref(`categories/${category}/products`)
            .limitToLast(6)
            .once("value")
            .then((snapshot) => {
              const productsData = snapshot.val();
              if (productsData) {
                const productKey = Object.keys(productsData)[0];
                return productsData[productKey];
              }
              return null;
            });
        });
        const productsArray = await Promise.all(productsPromises);
        setProducts(productsArray.filter((product) => product !== null));
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <article className="you-might-like">
      <div className="div-youMightLike">
        <h4 className="h-youMightLike">You may also like</h4>
        <ul className="ul-list-youMightLike">
          {products.map((product, index) => (
            <li className="li-youMightLike" key={index}>
              <Link to={`/${item.key}`}>
                <CardYouMightLike
                  imgItem={product.imgURL}
                  titleItem={product.titleItem}
                  titleArtist={product.titleArtist}
                  priceItem={product.priceItem}
                />
              </Link>
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
import "./YouMightLike.scss";
import { Link, useParams } from "react-router-dom";
import CardProductMain from "../UI/Cards/CardProductMain";

export default function YouMightLike() {
  const [isGrid, setIsGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const categories = [
          "albums",
          "gadgets",
          "posters",
          "puzzles",
          "t-shirts",
          "tickets",
        ];
        const productsPromises = categories.map((category) => {
          return (
            firebase
              .database()
              .ref(`categories/${category}/products`)
              /*  .limitToLast(100) */
              .once("value")
              .then((snapshot) => {
                const productsData = snapshot.val();
                if (productsData) {
                  const productKeys = Object.keys(productsData);
                  // random choosen one product of any category
                  const randomProductKey =
                    productKeys[Math.floor(Math.random() * productKeys.length)];
                  return productsData[randomProductKey];
                }
                return null;
              })
          );
        });
        const productsArray = await Promise.all(productsPromises);
        setProducts(productsArray.filter((product) => product !== null));
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchRandomProducts();
  }, [productId]);

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
    <article className="you-might-like">
      <div className="div-youMightLike">
        <h4 className="h-youMightLike">You may also like</h4>
        <ul className="ul-list-youMightLike">
          {products.map((product, index) => (
            <li className="li-youMightLike" key={index}>
              <Link className="link-you-might-like" to={`/${product.key}`}>
                {window.innerWidth < 425 ? (
                  <CardProductMain product={product} layout={"grid"} />
                ) : (
                  <CardProductMain product={product} layout={"list"} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
