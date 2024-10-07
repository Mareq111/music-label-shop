/* eslint-disable react/prop-types */

export default function ThirdImgProdDetails({
  imgThirdURL,
  titleArtist,
  titleItem,
}) {
  //dynamic alt text with titles
  const dynamicALT = `Third image of product: ${titleItem} - ${titleArtist}`;

  return <img loading="eager" src={imgThirdURL} alt={dynamicALT} className="bottom-images" />;
}
