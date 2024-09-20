import "./CardFooterBig.scss";
import AccordionFooter from "../Accordions/AccordionWithNav";
import AccordionInformationAnswer from "../Accordions/AccordionInformationAnswer";
import AccordionMyAccountAnswer from "../Accordions/AccordionMyAccountAnswer";
import AccordionAuthorAnswer from "../Accordions/AccordionAuthorAnswer";
import AccordionShoppingAnswer from "../Accordions/AccordionShoppingAnswer";
import BadgeAllSocials from "../Badge/BadgeAllSocials";
export default function CardFooterBig() {
  return (
    <div className="card-footer-big">
      {/* two ul list with links for subpages */}
      <div className="all-footer-links-div">
        <div className="footer-links-div">
          <ul className="list-of-pages">
            <li>
              <AccordionFooter
                titleAccordion={"Information"}
                answerAccordion={<AccordionInformationAnswer />}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"My account"}
                answerAccordion={<AccordionMyAccountAnswer />}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"Shopping"}
                answerAccordion={<AccordionShoppingAnswer />}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"Author"}
                answerAccordion={<AccordionAuthorAnswer />}
              />
            </li>
          </ul>
        </div>
        {/* bagde socials and rights */}
        <div className="socials-badges-rights-div">
          <BadgeAllSocials />
          <p className="text-rights-footer-card">
            © 2024 All Rights Reserved, Strimz Empire.
          </p>
        </div>
      </div>
    </div>
  );
}
