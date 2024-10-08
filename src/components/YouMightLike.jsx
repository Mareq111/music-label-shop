/* eslint-disable no-unused-vars */
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
              <Link className="link-you-might-like class-link-focus-pages" to={`/${product.key}`}>
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
