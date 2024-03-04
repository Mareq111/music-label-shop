import React from "react";
import "./CardFooterBig.scss";
import AccordionFooter from "../Accordions/AccordionFooter";
import AccordionInformationAnswer from "../Accordions/AccordionInformationAnswer";
import AccordionMyAccountAnswer from "../Accordions/AccordionMyAccountAnswer";
import AccordionAuthorAnswer from "../Accordions/AccordionAuthorAnswer";
import AccordionShoppingAnswer from "../Accordions/AccordionShoppingAnswer";
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
                ariaLabel={"Information Section"}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"My account"}
                answerAccordion={<AccordionMyAccountAnswer />}
                ariaLabel={"My Account Section"}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"Shopping"}
                answerAccordion={<AccordionShoppingAnswer />}
                ariaLabel={"Shopping Section"}
              />
            </li>
            <li>
              <AccordionFooter
                titleAccordion={"Author"}
                answerAccordion={<AccordionAuthorAnswer />}
                ariaLabel={"Author Section"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
