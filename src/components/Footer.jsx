import React from "react";
import "./Footer.scss";
import CardFooterSmall from "../UI/Cards/CardFooterSmall";
import CardFooterBig from "../UI/Cards/CardFooterBig";
import BtnComebackToTop from "../UI/Buttons/BtnComebackToTop";
export default function Footer() {
  return (
    <footer>
      <CardFooterSmall />
      <CardFooterBig />
      {/* floating button on right to comeback to top */}
      <div className="comeback-btn-footer">
        <BtnComebackToTop />
      </div>
    </footer>
  );
}
