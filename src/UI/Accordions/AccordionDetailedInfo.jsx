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
  const dynamicName =
    //dynamic title depends on which product are choosen
    productData.titleArtist ||
    productData.titleArtist ||
    productData.location ||
    productData.color ||
    productData.itemTitle ||
    productData.itemLevel;
  const combinedTitle = `${titleItem} - ${dynamicName}`;

  // Check if neither album nor item details are available
  const hideDetails = !isAlbum && (!composition || !color);
  return (
    <div className="parameters-div">
      {/* Render product title */}
      <TextProdTitle title={combinedTitle} />

      {/* Conditional rendering based on product type */}
      {!hideDetails && (
        <>
          {isAlbum ? ( // If it's an album, show release date and album duration
            <>
              <TextReleaseDate releaseDate={releaseDate} />
              <TextAlbumDuration albumDuration={albumDuration} />
            </>
          ) : (
            // If it's not an album, show composition and color
            <>
              <TextCompositionItem composition={composition} />
              <TextColorItem color={color} />
            </>
          )}
        </>
      )}

      {/* Render product ID */}
      <TextProductID productID={key} />

      {/* Render distributor details */}
      <TextDistributorDetails distributor={distributor} />
    </div>
  );
}
