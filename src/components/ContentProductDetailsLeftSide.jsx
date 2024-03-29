import TextSongsOnAlbum from "../UI/Text/TextSongsOnAlbum";
import "./ContentProductDetailsLeftSide.scss";
import ImgProductDetails from "./ImgProductDetails";
/* import mainImportImg from "../assets/img/coversMini/albums/wave-mini.jpg";
import firstImportImg from "../assets/img/coversMini/albums-collectors/dream-chaser-1-mini.jpg";
import secondImportImg from "../assets/img/coversMini/albums-collectors/dream-chaser-3-mini.jpg"; */
export default function ContentProductDetailsLeftSide() {
  const prodData = {
    itemTitle: "Album Wave",
    itemPrice: 12.99,
    itemAuthor: "El Double M",
    overallRating: 4.5,
    numberOfReviews: 4,
    version: ["CD", "Digital", "USB Card", "Limited Edition"],
   /*  mainImgSrc: mainImportImg,
    firstImgSrc: firstImportImg,
    secondImgSrc: secondImportImg, */
    songs: [
      { numberOfSong: 1, songTitle: "Enjoy" },
      { numberOfSong: 2, songTitle: "Row Your Boat" },
      { numberOfSong: 3, songTitle: "Neon Soul" },
      { numberOfSong: 4, songTitle: "Przesmyk" },
      { numberOfSong: 5, songTitle: "Somewhere In Time" },
      { numberOfSong: 6, songTitle: "Steamship" },
      { numberOfSong: 7, songTitle: "Through The Lake" },
      { numberOfSong: 8, songTitle: "On A Delightful Cruise" },
    ],
  };
  return (
    <article className="content-product-details__left">
      {/*  images of any product  */}
      <div className="images-of-product-div">
        <ImgProductDetails
          /* mainImgSrc={prodData.mainImgSrc}
          firstImgSrc={prodData.firstImgSrc}
          secondImgSrc={prodData.secondImgSrc} */
        />
      </div>
      {/*  text hidden if  screen is less than 560px  */}
      <div className="content-left-side-text-hidden">
        <TextSongsOnAlbum songs={prodData.songs} />
      </div>
      
    </article>
  );
}
