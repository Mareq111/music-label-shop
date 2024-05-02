/* eslint-disable react/prop-types */

export default function SecondImgProdDetails({
  imgSecondURL,
  titleArtist,
  titleItem,
}) {
  //dynamic alt text with titles
  const dynamicALT = `Second image of product: ${titleItem} - ${titleArtist}`;

  return <img src={imgSecondURL} alt={dynamicALT} className="bottom-images" />;
}
