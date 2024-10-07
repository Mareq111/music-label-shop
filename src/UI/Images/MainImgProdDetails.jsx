/* eslint-disable react/prop-types */

export default function MainImgProdDetails({ imgURL, titleItem, titleArtist }) {
  //dynamic alt text with titles
  const dynamicALT = `Main image of product: ${titleItem} - ${titleArtist}`;

  return <img loading="eager" src={imgURL} alt={dynamicALT} className="main-img" />;
}
