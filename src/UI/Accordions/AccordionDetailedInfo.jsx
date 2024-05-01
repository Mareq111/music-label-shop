/* 
import "./AccordionDetailedInfo.scss";
import TextDistributorDetails from "../Text/TextDistributorDetails";
import TextSongDuration from "../Text/TextSongDuration";
import TextProductID from "../Text/TextProductID";
import TextReleaseDate from "../Text/TextReleaseDate";
import TextProdTitle from "../Text/TextProdTitle";
import TextColorItem from "../Text/TextColorItem";
import TextCompositionItem from "../Text/TextCompositionItem";
export default function AccordionDetailedInfo() {
  //test item before firebase
  const item = {
    title: "Album Wave - El Double M",
    releaseDate: "July 7, 2021",
    productID: "AB12345",
    songDuration: "00:05:30",
    composition: "100% cotton",
    color: "black",
    distributor: "Strimz Empire",
  };

  return (
    <div className="parameters-div">
      <TextProdTitle title={item.title} />
      <TextReleaseDate releaseDate={item.releaseDate} />
      <TextProductID productID={item.productID} />
      <TextSongDuration songDuration={item.songDuration} />
      <TextCompositionItem composition={item.composition} />
      <TextColorItem color={item.color} />
      <TextDistributorDetails distributor={item.distributor} />
    </div>
  );
} */

/* import "./AccordionDetailedInfo.scss";
import TextDistributorDetails from "../Text/TextDistributorDetails";
import TextSongDuration from "../Text/TextSongDuration";
import TextProductID from "../Text/TextProductID";
import TextReleaseDate from "../Text/TextReleaseDate";
import TextProdTitle from "../Text/TextProdTitle";
import TextColorItem from "../Text/TextColorItem";
import TextCompositionItem from "../Text/TextCompositionItem";

export default function AccordionDetailedInfo({ productData }) {
  const { titleItem, titleArtist, releaseDate, productID, songDuration, composition, color, distributor } = productData;

  //for title combie together a title item plus title artist or item
  const combinedTitle = `${titleItem} - ${titleArtist}`;

  return (
    <div className="parameters-div">
      <TextProdTitle title={combinedTitle} />
      <TextReleaseDate releaseDate={releaseDate} />
      <TextProductID productID={productID} />
      <TextSongDuration songDuration={songDuration} />
      <TextCompositionItem composition={composition} />
      <TextColorItem color={color} />
      <TextDistributorDetails distributor={distributor} />
    </div>
  );
} */
/* eslint-disable react/prop-types */
import "./AccordionDetailedInfo.scss";
import TextDistributorDetails from "../Text/TextDistributorDetails";
import TextAlbumDuration from "../Text/TextAlbumDuration";
import TextProductID from "../Text/TextProductID";
import TextReleaseDate from "../Text/TextReleaseDate";
import TextProdTitle from "../Text/TextProdTitle";
import TextColorItem from "../Text/TextColorItem";
import TextCompositionItem from "../Text/TextCompositionItem";

export default function AccordionDetailedInfo({ productData }) {
  const {
    titleItem,
    titleArtist,
    releaseDate,
    songs,
    distributor,
    key,
    composition,
    color,
    albumDuration,
  } = productData;

  //check if its album or item - album has songs
  const isAlbum = songs && releaseDate;

  //for title combie together a title item plus title artist or item
  const combinedTitle = `${titleItem} - ${titleArtist}`;
  return (
    <div className="parameters-div">
      <TextProdTitle title={combinedTitle} />

      {/* checking if its album show relase date and song duration but if isnt show color, composition for item */}
      {isAlbum ? (
        <>
          <TextReleaseDate releaseDate={releaseDate} />
          <TextAlbumDuration albumDuration={albumDuration} />
        </>
      ) : (
        <>
          <TextCompositionItem composition={composition} />
          <TextColorItem color={color} />
        </>
      )}
      {/* i dont have id so i use key for it */}
      <TextProductID productID={key} />
      <TextDistributorDetails distributor={distributor} />
    </div>
  );
}
