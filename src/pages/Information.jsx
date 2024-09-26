/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
import BtnCheckWebsite from "../UI/Buttons/BtnCheckWebsite";
import Accordion from "../UI/Accordions/Accordion";
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

        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="information-contact"
        >
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
        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="information-about-us"
        >
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
        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="information-faq"
        >
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">FAQ</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Frequently Asked Questions</h5>
                <p className="p-into-subpage">
                  In this section, we answer the most common questions you may
                  have.
                </p>
              </div>
              <ul className="ul-accordions-into-subpage">
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Order wait time?"}
                    answerAccordion={
                      "The order wait time varies depending on the selected delivery option. Our express delivery ensures delivery within 2 days from the date of product packaging. Alternatively, our standard delivery option typically takes 4 days, while our economy option may take up to 6 days for delivery after product packaging."
                    }
                  />
                </li>
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Need to register?"}
                    answerAccordion={
                      "Registration is not mandatory. However, by creating an account, you gain access to your order history and user profile. In the future, members will also receive discounts on their purchases."
                    }
                  />
                </li>
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Can I change/cancel order?"}
                    answerAccordion={
                      "Yes, please send us an email from the address used to place the order within 12 hours of payment. Our Email: [office@strimz-empire.com] "
                    }
                  />
                </li>
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Return policy?"}
                    answerAccordion={
                      "We offer a 30-day window for free exchanges and returns, excluding opened or used sets with records and individual records."
                    }
                  />
                </li>
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Contact support? "}
                    answerAccordion={
                      "For any inquiries or assistance, please feel free to reach out to our support team via email at [support@strimz-empire.com] or by phone at [+48 133 552 7500]. We're here to help!"
                    }
                  />
                </li>
                <li className="li-accoridon-subpages">
                  <Accordion
                    titleAccordion={"Payment methods?"}
                    answerAccordion={
                      "We accept debit and credit card payments, as well as PayPal for your convenience."
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="information-privacy-policy"
        >
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Privacy Policy</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Introduction</h5>
                <p className="p-into-subpage">
                  Your privacy is important to us. This privacy policy explains
                  how we collect, use, and protect your personal information.
                </p>
              </div>
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Data Collection</h5>
                <p className="p-into-subpage">
                  We collect personal information that you provide to us
                  directly when you register on our site, place an order,
                  subscribe to our newsletter, or contact us. This information
                  may include your name, email address, mailing address, phone
                  number, and payment information.
                </p>
              </div>

              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Data Sharing</h5>
                <p className="p-into-subpage">
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties except to trusted third parties
                  who assist us in operating our website, conducting our
                  business, or servicing you, so long as those parties agree to
                  keep this information confidential. We may also release your
                  information when we believe release is appropriate to comply
                  with the law, enforce our site policies, or protect ours or
                  others' rights, property, or safety.XD
                </p>
              </div>
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage">Data Protection</h5>
                <p className="p-into-subpage">
                  We take the security of your personal information seriously.
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you place an order or
                  enter, submit, or access your personal information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
