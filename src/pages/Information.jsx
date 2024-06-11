/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
import BtnCheckWebsite from "../UI/Buttons/BtnCheckWebsite";
export default function Information() {
  const location = useLocation();
  const margin = 32; // 32px = 2rem

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - margin;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="subpage">
      <div className="head-of-subpage">
        <h3 className="h-text-subpage">Information</h3>
        <p className="p-subpage-description">
          Explore essential details about our operations here. You'll find
          contact information, our story, frequently asked questions, and our
          privacy policy.
        </p>
      </div>

      {/* all sections into page */}
      <div className="all-sections-subpage">
        {/* section contact */}

        <section className="content-section-subpage" id="information-contact">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Contact</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Email: </h5>
                <p className="p-into-subpage">office@strimz-empire.com</p>
              </div>
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Phone:</h5>
                <p className="p-into-subpage">+48 133 552 7559</p>
              </div>

              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage"> Address: </h5>
                <p className="p-into-subpage"> Future Street 13, Warsaw</p>
              </div>
            </div>
          </div>
        </section>
        {/* section about us */}
        <section className="content-section-subpage" id="information-about-us">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">About Us</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Our store</h5>
                <p className="p-into-subpage">
                  We are the official online store of Strimz Empire music label,
                  offering albums and exclusive merchandise from our talented
                  artists. Explore our collection to find the latest music
                  releases, apparel, accessories, and more, all crafted with the
                  unique style and quality of Strimz Empire
                </p>
              </div>
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">See full story </h5>
                <p className="p-into-subpage">
                  Our website, for more check about' tab.
                </p>
                <div className="btn-checkwebsite-div">
                  <BtnCheckWebsite />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-subpage" id="information-faq">
          FAQ
        </section>
        <section
          className="content-section-subpage"
          id="information-privacy-policy"
        >
          Privacy Policy
        </section>
      </div>
    </div>
  );
}
