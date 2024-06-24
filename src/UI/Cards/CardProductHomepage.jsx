
import arenaCover from "../../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import './CardProductHomepage.scss';
export default function CardProductHomepage() {
  return (
    <div className="big-card-homepage">
        <h2 className="big-card-homepage-pre-head">
            Our  albums collections
        </h2>
        <h3 className="big-card-homepage-h">Explore Our Entire Music Collection!</h3>
        <p className="big-card-homepage-p">Discover the full range of albums from our music label. From iconic classics to the hottest new releases, our collection has something for every music lover. Click here to explore and find your next favorite album!</p>
        <div className="btn-img-center-big-card-homepage">
        <button>Albums</button>

      
        <div className="big-card-homepage-div-img">
            <div className="big-card-homepage-img-shape">
                <img src={arenaCover} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}