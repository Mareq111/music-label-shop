import React from "react";
import "./Footer.scss";
import CardFooterSmall from "../UI/Cards/CardFooterSmall";
import CardFooterBig from "../UI/Cards/CardFooterBig";
export default function Footer() {
  return (
    <footer>
      <CardFooterSmall />
      <CardFooterBig />
    </footer>
  );
}
