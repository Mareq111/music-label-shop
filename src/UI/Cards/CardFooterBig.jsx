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
          <div className="div-list-of-pages">
            <AccordionFooter
              titleAccordion={"Information"}
              answerAccordion={<AccordionInformationAnswer />}
            />
            <AccordionFooter
              titleAccordion={"My account"}
              answerAccordion={<AccordionMyAccountAnswer />}
            />
            <AccordionFooter
              titleAccordion={"Shopping"}
              answerAccordion={<AccordionShoppingAnswer />}
            />
            <AccordionFooter
              titleAccordion={"Author"}
              answerAccordion={<AccordionAuthorAnswer />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
