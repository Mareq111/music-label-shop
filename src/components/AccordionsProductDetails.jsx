/* eslint-disable react/prop-types */
import Accordion from "../UI/Accordions/Accordion";
import "./AccordionsProductDetail.scss";
import AccordionStreamingsContent from "../UI/Accordions/AccordionStreamingsContent";
import AccordionListenFree from "../UI/Accordions/AccordionListenFree";
import AccordionDetailedInfo from "../UI/Accordions/AccordionDetailedInfo";
import AccordionRatingComments from "../UI/Accordions/AccordionRatingComments";
export default function AccordionsProductDetails({ productData }) {
  return (
    <div className="div-all-accordions">
      {/* data from json of any item */}
      <Accordion
        titleAccordion={"Detailed information"}
        answerAccordion={<AccordionDetailedInfo productData={productData} />}
      />
      <Accordion
        titleAccordion={"Listen on streamings"}
        answerAccordion={<AccordionStreamingsContent />}
      />
      <Accordion
        titleAccordion={"Listen for free"}
        answerAccordion={<AccordionListenFree />}
      />
      {/* data from json of any item */}

      {/* <Accordion
        titleAccordion={"Ratings and reviews"}
        answerAccordion={<AccordionRatingComments productData={productData} />}
      /> */}
      <Accordion
        titleAccordion={"Ratings and reviews"}
        answerAccordion={
          <AccordionRatingComments commentsData={productData.commentsData} />
        }
      />
    </div>
  );
}
