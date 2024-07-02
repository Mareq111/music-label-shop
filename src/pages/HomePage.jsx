/* import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
export default function HomePage() {
  const navigate = useNavigate();

  // handler functions to products details and products pages
  function navToProductsDetailsHandler() {
    navigate("products/:productId");
  }
  function navToProducts() {
    navigate("albums/all-strimz-empire");
  }
  return (
    <div className="home-content">
      <h1>My home page</h1>

      <button onClick={navToProducts}>Albums</button>
      <button onClick={navToProductsDetailsHandler}>Product Details</button>
    </div>
  );
}
 */

import CardProductHomepage from "../UI/Cards/CardProductHomepage";
import "./HomePage.scss";
import ourCDS from "../assets/img/others/our-shop-cds.jpg";
import ourTickets from "../assets/img/others/Ticket-slider1.jpg";
import CardHomepageSocialLinks from "../UI/Cards/CardHomepageSocialLinks";
import CardHomepageWebsiteLink from "../UI/Cards/CardHomepageWebsiteLink";
import CardPreorderHomepage from "../UI/Cards/CardPreorderHomepage";

const cardData = [
  {
    title: "Our albums collections",
    headline: "Unleash the Music.",
    description:
      "Dive into a world of sound with our complete album collection. From iconic classics to fresh new releases, there's a perfect tune for every listener!",
    buttonText: "Albums",
    link: "/albums/all-strimz-empire",
    backgroundColor: "#3a0606",
    img: ourCDS,
  },
  {
    title: "Upcoming Concerts",
    headline: "Feel the Beat.",
    description:
      "Join us for unforgettable live performances. Get your tickets now and feel the thrill of live music with friends and family!",
    buttonText: "Tickets",
    link: "/tickets/all-locations",
    backgroundColor: "#17063a",
    img: ourTickets,
  },
  {
    title: "Exclusive Merchandise",
    headline: "Wear the Vibe.",
    description:
      "Discover our exclusive collection of t-shirts. Show off your favorite tunes in style with unique designs that speak to your musical soul. Find your perfect fit and express your passion!",
    buttonText: "T-Shirts",
    link: "/t-shirts/all-colors",
    backgroundColor: "#06273a",
    img: ourCDS,
  },
  {
    title: "Cool Gadgets",
    headline: "Get the Coolest Gear.",
    description:
      "Explore our range of gadgets. From mugs to stickers, find unique items that show off your style. Click to browse our selection and grab your favorites!",
    buttonText: "Gadgets",
    link: "/gadgets/all-items",
    backgroundColor: "#063a36",
    img: ourCDS,
  },
  {
    title: "Artist Posters",
    headline: "Decorate Your Space.",
    description:
      "Check out our collection of artist posters. Perfect for any fan, these posters feature cover art from your favorite albums. See all available posters and make your walls come alive!",
    buttonText: "Posters",
    link: "/posters/all-strimz-empire",
    backgroundColor: "#063a20",
    img: ourCDS,
  },
  {
    title: "Album Puzzles",
    headline: "Piece Together Music.",
    description:
      "Challenge yourself with our album cover puzzles. Available in various sizes, these puzzles are perfect for music lovers. Click to start your puzzle adventure now!",
    buttonText: "Puzzles",
    link: "/puzzles/all-levels",
    backgroundColor: "#3a1906",
    img: ourCDS,
  },
];

export default function Homepage() {
  return (
    <div className="home-content">
      {/* dynamic cards with sections */}
      {cardData.map((card, index) => (
        <CardProductHomepage key={index} data={card} />
      ))}
      {/* other content */}
      {/* grid for other cards */}

      <div className="home-content-grid-cards">
        <CardHomepageSocialLinks />
        <CardHomepageWebsiteLink />
      </div>
      <div className="home-content-grid-cards">
        <CardPreorderHomepage />
        <CardPreorderHomepage />
      </div>
    </div>
  );
}
