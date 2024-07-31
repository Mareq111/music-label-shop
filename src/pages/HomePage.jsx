/* import { useEffect, useRef } from "react";
import CardProductHomepage from "../UI/Cards/CardProductHomepage";
import "./HomePage.scss";
import "./HomePage.scss";
import CardHomepageSocialLinks from "../UI/Cards/CardHomepageSocialLinks";
import CardHomepageWebsiteLink from "../UI/Cards/CardHomepageWebsiteLink";
import CardPreorderHomepage from "../UI/Cards/CardPreorderHomepage";
import CardCustomerFavHomepage from "../UI/Cards/CardCustomerFavHomepage";
import CardInfoHomepage from "../UI/Cards/CardInfoHomepage";
import homepageData from "../data/homepageData";

export default function Homepage() {
  // animation for cards - intersection OBSERVER
  const cardsRef = useRef([]);
  const preorderCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-show");
          observer.unobserve(entry.target);
        }
      });
    });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  // animation for CardPreorderHomepage - intersection OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-preorder-show");
          observer.unobserve(entry.target);
        }
      });
    });

    preorderCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-content">
      {homepageData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="card-hidden"
        >
          <CardProductHomepage data={card} />
        </div>
      ))}
      <div className="wrap-cards-homepage-left">
        <div className="home-content-fav-section">
          <CardCustomerFavHomepage titleSection={"Customer Favorites"} />
          <CardInfoHomepage />
        </div>

        <div className="home-content-grid-cards">
          <CardHomepageSocialLinks />
          <CardHomepageWebsiteLink />
        </div>
        <div className="home-content-grid-cards">
          <CardPreorderHomepage />
          <CardPreorderHomepage />
        </div>
        <div className="home-content-fav-section-reverse">
          <CardInfoHomepage />
          <CardCustomerFavHomepage titleSection={"Recommended for You "} />
        </div>
      </div>
    </div>
  );
}
 */

import { useEffect, useRef } from "react";
import CardProductHomepage from "../UI/Cards/CardProductHomepage";
import "./HomePage.scss";
import CardHomepageSocialLinks from "../UI/Cards/CardHomepageSocialLinks";
import CardHomepageWebsiteLink from "../UI/Cards/CardHomepageWebsiteLink";
import CardPreorderHomepage from "../UI/Cards/CardPreorderHomepage";
import CardCustomerFavHomepage from "../UI/Cards/CardCustomerFavHomepage";
import CardInfoHomepage from "../UI/Cards/CardInfoHomepage";
import homepageData from "../data/homepageData";

export default function Homepage() {
  const cardsRefs = useRef([]);
  const otherCardsRef = useRef(null);

  // animation for CardProductHomepage - intersection OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-show");
          observer.unobserve(entry.target);
        }
      });
    });

    cardsRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // animation for wrap-cards-homepage-left - intersection OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("wrap-cards-show");
          observer.unobserve(entry.target);
        }
      });
    });

    const container = otherCardsRef.current;
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-content">
      {homepageData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRefs.current[index] = el)}
          className="card-hidden"
        >
          <CardProductHomepage data={card} />
        </div>
      ))}
      <div ref={otherCardsRef} className="wrap-cards-homepage-left card-hidden">
        <div className="home-content-fav-section">
          <CardCustomerFavHomepage titleSection={"Customer Favorites"} />
          <CardInfoHomepage />
        </div>

        <div className="home-content-grid-cards">
          <CardHomepageSocialLinks />
          <CardHomepageWebsiteLink />
        </div>
        <div className="home-content-grid-cards">
          <CardPreorderHomepage />
          <CardPreorderHomepage />
        </div>
        <div className="home-content-fav-section-reverse">
          <CardInfoHomepage />
          <CardCustomerFavHomepage titleSection={"Recommended for You "} />
        </div>
      </div>
    </div>
  );
}
