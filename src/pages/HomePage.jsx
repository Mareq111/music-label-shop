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
//preorder img card
import preorderAlbum from "../assets/img/coversMini/albums/red-path-to-zukunft-mini.jpg";
import preorderCardGadget from "../assets/img/others/BAG2-STRIMZ2JPG.jpg";

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
            dynamicLink={"/poster05-posterSet1-ELDM"}
          />
        </div>

        <div className="home-content-grid-cards">
          <CardHomepageSocialLinks tabIndex={0} />
          <CardHomepageWebsiteLink />
        </div>
        <div className="home-content-grid-cards">
          <CardPreorderHomepage
            srcImg={preorderAlbum}
            imgAlt={"Go to Preorder Album Page"}
            hPreorder={"Upcoming Album."}
            preHead={"Red Path to Zukunft by El DM - Coming Soon in 2025"}
            dynamicLink={"/albumRedPathToZukunft"}
            dynamicTextBtn={"Preorder"}
          />
          <CardPreorderHomepage
            srcImg={preorderCardGadget}
            imgAlt={"Go to page with bags"}
            hPreorder={"Our stylish Bags."}
            preHead={"When you go shopping, grab our Strimz Empire bag!"}
            dynamicLink={"/gadgets/bags"}
            dynamicTextBtn={"Explore Our Collection"}
          />
        </div>
        <div className="home-content-fav-section-reverse">
          {/* change dynamic link for uniqe path with set */}

          <CardInfoHomepage
            buttonText={"See New Posters Trio"}
            imgSrc={setElDMTWO}
            dynamicLink={"/poster14-posterSet2-ELDM"}
          />
          <CardCustomerFavHomepage titleSection={"Recommended for You "} />
        </div>
      </div>
    </div>
  );
}
