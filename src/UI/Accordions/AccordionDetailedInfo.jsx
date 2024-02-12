import React from "react";
import "./AccordionDetailedInfo";
import TextDistributorDetails from "../Text/TextDistributorDetails";
import TextSongDuration from "../Text/TextSongDuration";
import TextProductID from "../Text/TextProductID";
import TextReleaseDate from "../Text/TextReleaseDate";
import TextProdTitle from "../Text/TextProdTitle";
import TextClothesSpecs from "../Text/TextClothesSpecs";
export default function AccordionDetailedInfo() {
  return (
    <div>
      <TextProdTitle />
      <TextReleaseDate /> 
      <TextProductID />
      <TextSongDuration />
      <TextClothesSpecs />
      <TextDistributorDetails />
    </div>
  );
}
