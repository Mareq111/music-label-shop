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

const cardData = [
  {
    title: "Our albums collections",
    headline: "Unleash the Music.",
    description:
      "Dive into a world of sound with our complete album collection. From iconic classics to fresh new releases, there's a perfect tune for every listener. Click to explore and start your musical journey now!",
    buttonText: "Albums",
    link: "/albums/all-strimz-empire",
    backgroundColor: "#3a0606",
    img: ourCDS,
  },
  {
    title: "Upcoming Concerts",
    headline: "Feel the Beat.",
    description:
      "Join us for unforgettable live performances. Get your tickets now and be part of the excitement!",
    buttonText: "Tickets",
    link: "/tickets/all-locations",
    backgroundColor: "#17063a",
    img: ourCDS,
  },
  {
    title: "Exclusive Merchandise",
    headline: "Wear the Vibe.",
    description:
      "Explore our exclusive range of merchandise. From t-shirts to posters, show off your favorite tunes in style.",
    buttonText: "T-Shirts",
    link: "/t-shirts/all-colors",
    backgroundColor: "#06273a",
    img: ourCDS,
  },
  {
    title: "Special Offers",
    headline: "Don't Miss Out.",
    description:
      "Check out our special offers and get the best deals on your favorite music and merch. Hurry, while stocks last!",
    buttonText: "Gadgets",
    link: "/gadgets/all-items",
    backgroundColor: "#063a36",
    img: ourCDS,
  },
  {
    title: "Special Offers",
    headline: "Don't Miss Out.",
    description:
      "Check out our special offers and get the best deals on your favorite music and merch. Hurry, while stocks last!",
    buttonText: "Posters",
    link: "/posters/all-strimz-empire",
    backgroundColor: "#063a20",
    img: ourCDS,
  },
  {
    title: "Special Offers",
    headline: "Don't Miss Out.",
    description:
      "Check out our special offers and get the best deals on your favorite music and merch. Hurry, while stocks last!",
    buttonText: "Puzzles",
    link: "/puzzles/all-levels",
    backgroundColor: "#3a2906",
    img: ourCDS,
  },
];

export default function Homepage() {
  return (
    <div className="home-content">
      {cardData.map((card, index) => (
        <CardProductHomepage key={index} data={card} />
      ))}
    </div>
  );
}
