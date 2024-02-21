import React from "react";
import "./CardYouMightLike.scss";
import ImgCard from "../../assets/img/coversMini/albums/flashback_from_2001-mini.jpg";
export default function CardYouMightLike() {
  return (
    <div className="card__youMightLike">
      <div className="div-top-of-card">
        <div className="div-img-card__youMightLike">
          <img
            className="img-card__youMightLike"
            src={ImgCard}
            alt="album-img"
          />
        </div>
      </div>
      <div className="div-bottom-of-card">
        {/* div 2 titles */}
        <div className="two-titles-card">
          <div className="div-title-card__youMightLike">
            <h4 className="title-card__youMightLike">
              Album Flashback From 2001
            </h4>
          </div>
          <div className="div-title-card__youMightLike">
            <h5 className="titleArtist-card__youMightLike">El Double M</h5>
          </div>
        </div>
        <h5 className="price-card__youMightLike">12.99€</h5>
      </div>
    </div>
  );
}
