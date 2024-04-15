/* eslint-disable react/prop-types */

/* import  { useState, useEffect } from 'react';
import './CardProductMain.scss';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import firebaseConfig from '../../firebaseConfig';

 //Initialize Firebase app with config
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export default function CardProductMain({
  imgURL,
  titleItem,
  titleArtist,
  priceItem,
  layout,
}) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    // Get download URL for the image
    async function getImageURL() {
      try {
        const url = await storage.ref().child(imgURL).getDownloadURL(); 
        console.log(url)
        setImageURL(url);
      } catch (error) {
        console.error('Error getting image URL:', error);
      }
    }

    getImageURL();
  }, [imgURL]);

  const renderCardContent = () => {
    if (layout === 'grid') {
      return (
        <div className="card__Product-list">
          <div className="div-top-of-card-Product-list">
            <div className="div-img-card__Product-list">
              {imageURL && (
                <img
                  className="img-card__Product-list"
                  src={imageURL}
                  alt={`${titleItem} By ${titleArtist}`}
                />
              )}
            </div>
          </div>
          <div className="div-bottom-of-card-Product-list">
            <div className="two-titles-card-Product-list">
              <div className="div-title-card__Product-list">
                <h4 className="title-card__Product-list">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-list">
                <h5 className="titleArtist-card__Product-list">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-list">From {priceItem}€</h5>
          </div>
        </div>
      );
    } else if (layout === 'list') {
      return (
        <div className="card__Product-grid">
          <div className="div-top-of-card-Product-grid">
            <div className="div-img-card__Product-grid">
              {imageURL && (
                <img
                  className="img-card__Product-grid"
                  src={imageURL}
                  alt={`${titleItem} By ${titleArtist}`}
                />
              )}
            </div>
          </div>
          <div className="div-bottom-of-card-Product-grid">
            <div className="two-titles-card-Product-grid">
              <div className="div-title-card__Product-grid">
                <h4 className="title-card__Product-grid">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-grid">
                <h5 className="titleArtist-card__Product-grid">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-grid">From {priceItem}€</h5>
          </div>
        </div>
      );
    }
  }; 

  return (
    <div className="card-product-main-container">{renderCardContent()}</div>
  );
}
*/

//test

/* import "./CardProductMain.scss";

export default function CardProductMain({
  imgURL,
  titleItem,
  titleArtist,
  priceItem,
  layout,
}) {
  const renderCardContent = () => {
    if (layout === "grid") {
      return (
        <div className="card__Product-list">
          <div className="div-top-of-card-Product-list">
            <div className="div-img-card__Product-list">
              <img
                className="product-image"
                src={imgURL}
                alt={`${titleItem} by ${titleArtist}`}
              />
            </div>
          </div>
          <div className="div-bottom-of-card-Product-list">
            <div className="two-titles-card-Product-list">
              <div className="div-title-card__Product-list">
                <h4 className="title-card__Product-list">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-list">
                <h5 className="titleArtist-card__Product-list">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-list">From {priceItem}€</h5>
          </div>
        </div>
      );
    } else if (layout === "list") {
      return (
        <div className="card__Product-grid">
          <div className="div-top-of-card-Product-grid">
            <div className="div-img-card__Product-grid">
              <img
        className="product-image"
        src={imgURL}
        alt={`${titleItem} by ${titleArtist}`}
      />
            </div>
          </div>
          <div className="div-bottom-of-card-Product-grid">
            <div className="two-titles-card-Product-grid">
              <div className="div-title-card__Product-grid">
                <h4 className="title-card__Product-grid">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-grid">
                <h5 className="titleArtist-card__Product-grid">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-grid">From {priceItem}€</h5>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="card-product-main-container">{renderCardContent()}</div>
  );
} */

//dobry kod ale bezz layoutu

import "./CardProductMain.scss";

export default function CardProductMain({
  product: { titleItem, titleArtist, priceItem, imgURL },
  layout,
}) {
  return (
    <div className={`card-product-main-container ${layout}`}>
      <img
        className="product-image"
        src={imgURL}
        alt={`${titleItem} by ${titleArtist}`}
      />
      <div className="product-details">
        <h4 className="product-title">{titleItem}</h4>
        <h5 className="product-artist">{titleArtist}</h5>
        <h5 className="product-price">From {priceItem}€</h5>
      </div>
    </div>
  );
}
