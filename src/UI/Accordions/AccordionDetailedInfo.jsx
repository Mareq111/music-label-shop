import React from "react";
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
}
