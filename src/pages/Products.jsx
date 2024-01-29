import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";

export default function Products() {
  //test few products
  const PRODUCTS = [
    { id: "p1", title: "product 1" },
    { id: "p2", title: "product 2" },
    { id: "p3", title: "product 3" },
  ];

  return (
    <>
      <ul>
        {/* mapping our products with link by their product ids */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
