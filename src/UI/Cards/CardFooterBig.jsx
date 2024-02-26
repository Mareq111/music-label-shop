import React from "react";
import "./CardFooterBig.scss";
import AccordionFooter from "../Accordions/AccordionFooter";
import AccordionInformationAnswer from "../Accordions/AccordionInformationAnswer";
import AccordionMyAccountAnswer from "../Accordions/AccordionMyAccountAnswer";
import AccordionShoppingCartAnswer from "../Accordions/AccordionShoppingCartAnswer";
import AccordionPaymentsAnswer from "../Accordions/AccordionPaymentsAnswer";
import AccordionAboutUsAnswer from "../Accordions/AccordionAboutUsAnswer";
export default function CardFooterBig() {
  return (
    <div className="card-footer-big">
      {/* two ul list with links for subpages */}
      <div className="all-footer-links-div">
        
        <div className="footer-links-div">
          <ul className="ul-list-of-pages">
            {/*  <Accordion
        titleAccordion={"Listen on streamings"}
        answerAccordion={<AccordionStreamingsContent />}
      /> */}
            <AccordionFooter
              titleAccordion={"Information"}
              answerAccordion={<AccordionInformationAnswer />}
            />
            <AccordionFooter
              titleAccordion={"My account"}
              answerAccordion={<AccordionMyAccountAnswer />}
            />
            <AccordionFooter
              titleAccordion={"Shopping cart"}
              answerAccordion={<AccordionAboutUsAnswer />}
            />
            <AccordionFooter
              titleAccordion={"Payments"}
              answerAccordion={<AccordionPaymentsAnswer />}
            />
            <AccordionFooter
              titleAccordion={"About us"}
              answerAccordion={<AccordionAboutUsAnswer />}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
