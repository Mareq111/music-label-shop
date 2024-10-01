import { useEffect, useRef } from "react";
import CardProductHomepage from "../UI/Cards/CardProductHomepage";
import "./HomePage.scss";
import CardHomepageSocialLinks from "../UI/Cards/CardHomepageSocialLinks";
import CardHomepageWebsiteLink from "../UI/Cards/CardHomepageWebsiteLink";
import CardPreorderHomepage from "../UI/Cards/CardPreorderHomepage";
import CardCustomerFavHomepage from "../UI/Cards/CardCustomerFavHomepage";
import CardInfoHomepage from "../UI/Cards/CardInfoHomepage";
import homepageData from "../data/homepageData";
import setElDM from "../assets/img/others/set-eldm.jpg";
import setElDMTWO from "../assets/img/others/set2-eldm.jpg";

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
          <CardCustomerFavHomepage
            titleSection={"Customer Favorites"}
            tabIndex={0}
          />
          {/* change dynamic link for uniqe path with set */}
          <CardInfoHomepage
            tabIndex={0}
            buttonText={"View 3 Posters Set"}
            imgSrc={setElDM}
            dynamicLink={"./posters/el-dm"}
          />
        </div>

        <div className="home-content-grid-cards">
          <CardHomepageSocialLinks tabIndex={0} />
          <CardHomepageWebsiteLink />
        </div>
        <div className="home-content-grid-cards">
          <CardPreorderHomepage />
          <CardPreorderHomepage />
        </div>
        <div className="home-content-fav-section-reverse">
          {/* change dynamic link for uniqe path with set */}

          <CardInfoHomepage
            buttonText={"See New Posters Trio"}
            imgSrc={setElDMTWO}
            dynamicLink={"./posters/el-dm"}
          />
          <CardCustomerFavHomepage titleSection={"Recommended for You "} />
        </div>
      </div>
    </div>
  );
}
