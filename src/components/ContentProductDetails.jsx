/* /*  import "./ContentProductDetails.scss";
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo.jsx";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor.jsx";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice.js";
import prodData from "../data/prodData.js";

export default function ContentProductDetails() {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
  };
  //redux add data to cart
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(prodData));
  };

  return (
    <div className="div-content-text-all">
      <BadgeTitlePriceAuthor
       titleItem={prodData.titleItem}
        priceItem={prodData.priceItem}
        titleArtist={prodData.titleArtist}
      />
      <BadgeRatingProductInfo
        overallRating={prodData.overallRating}
        numberOfReviews={prodData.numberOfReviews}
      />
  
      <ChooserVersionRadio
        prodData={prodData}
        onVersionChange={handleVersionChange}
      />
      <BtnAddToCart
        item={{ ...prodData, radioId: radioId }}
       selectedVersion={selectedVersion}
       onClick={handleAddToCart}
      />
      <BadgesProductDetails />
      <TextProductDescription />
      <span className="hidden-textSongs-560px">
        <TextSongsOnAlbum songs={prodData.songs} />
      </span>

      <AccordionsProductDetails />
    </div>
  );
} */

/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/database"; // Import the Firebase Realtime Database module
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo.jsx";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor.jsx";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum.jsx";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice.js";

export default function ContentProductDetails() {
  //firebase data state
  const [productData, setProductData] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("categories/albums/products")
          .once("value");
        const dataFromFirebase = snapshot.val();
        setProductData(dataFromFirebase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(productData));
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="div-content-text-all">
      <BadgeTitlePriceAuthor
        titleItem={productData?.titleItem}
        priceItem={productData?.priceItem}
        titleArtist={productData?.titleArtist}
      />
      <BadgeRatingProductInfo
        overallRating={productData?.overallRating}
        numberOfReviews={productData?.numberOfReviews}
      />
      <ChooserVersionRadio
        prodData={productData}
        onVersionChange={handleVersionChange}
      />
      <BtnAddToCart
        item={{ ...productData, radioId: radioId }}
        selectedVersion={selectedVersion}
        onClick={handleAddToCart}
      />
      <BadgesProductDetails />
      <TextProductDescription />
      <span className="hidden-textSongs-560px">
        <TextSongsOnAlbum albumKey={productData.key} />
      </span>
      <AccordionsProductDetails />
    </div>
  );
} */
/* import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import ChooserVersionRadio from "./ChooserVersionRadio.jsx";
import BtnAddToCart from "./../UI/Buttons/BtnAddToCart.jsx";
import TextProductDescription from "../UI/Text/TextProductDescription.jsx";
import BadgesProductDetails from "./BadgesProductDetails.jsx";
import AccordionsProductDetails from "./AccordionsProductDetails.jsx";
import BadgeRatingProductInfo from "../UI/Badge/BadgeRatingProductInfo.jsx";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor.jsx";
import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum.jsx";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice.js";

export default function ContentProductDetails() {
  const [productData, setProductData] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("categories/albums/products")
          .once("value");
        const dataFromFirebase = snapshot.val();
        setProductData(dataFromFirebase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const handleVersionChange = (version, id) => {
    setSelectedVersion(version);
    setRadioId(id);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(productData));
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="div-content-text-all">
      <BadgeTitlePriceAuthor
        titleItem={productData?.titleItem}
        priceItem={productData?.priceItem}
        titleArtist={productData?.titleArtist}
      />
      <BadgeRatingProductInfo
        overallRating={productData?.overallRating}
        numberOfReviews={productData?.numberOfReviews}
      />
      <ChooserVersionRadio
        prodData={productData}
        onVersionChange={handleVersionChange}
      />
      <BtnAddToCart
        item={{ ...productData, radioId: radioId }}
        selectedVersion={selectedVersion}
        onClick={handleAddToCart}
      />
      <BadgesProductDetails />
      <TextProductDescription />
      <span className="hidden-textSongs-560px">
        {productData && <TextSongsOnAlbum albumKey={productData.key} />}
      </span>
      <AccordionsProductDetails />
    </div>
  );
}
*/

/* import "firebase/compat/database";
import BadgeTitlePriceAuthor from "../UI/Badge/BadgeTitlePriceAuthor";
export default function ContentProductDetails({  }) {
  
  
  return (
    
    <div className="div-content-text-all">
      
   tertget
    </div>
  );
}
 */