/* eslint-disable react/prop-types */
/* import { Link } from "react-router-dom";
import Accordion from "./Accordion.jsx";
export default function AccordionCheckoutDetails() {
  return (
    <div>
      <Link to="/checkout">
        <Accordion titleAccordion={`View your delivery details`} />
      </Link>
    </div>
  );
}
 */

/* import { Link } from "react-router-dom";
import Accordion from "./Accordion.jsx";
import { useSelector } from "react-redux";

export default function AccordionCheckoutDetails() {
  const formData = useSelector((state) => state.form);
  return (
    <div>
      <Link to="/checkout">
        <Accordion titleAccordion={`View your delivery details`} answerAccordion={JSON.stringify(formData)} />
      </Link>
    </div>
  );
} */

/* import { useSelector } from "react-redux";
import Accordion from "./Accordion.jsx";
import { Link } from "react-router-dom";

export default function AccordionCheckoutDetails() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
    
       <Link to="/checkout">
        <Accordion titleAccordion={`View your delivery details`}  answerAccordion={formData}  />
      </Link>
    </div>
  );
} */
/* import { useSelector } from "react-redux";
import Accordion from "./Accordion.jsx";
import { Link } from "react-router-dom";
import "./AccordionCheckoutDetailsAnswer.jsx";
import AccordionCheckoutDetailsAnswer from "./AccordionCheckoutDetailsAnswer.jsx";

export default function AccordionCheckoutDetails() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
     
      <Accordion
        titleAccordion={`View your delivery details`}
        answerAccordion={<AccordionCheckoutDetailsAnswer />}
      />
      
    </div>
  );
}
 */


import { useSelector } from "react-redux";
import Accordion from "./Accordion.jsx";
import AccordionCheckoutDetailsAnswer from "./AccordionCheckoutDetailsAnswer.jsx";

export default function AccordionCheckoutDetails() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
      <Accordion
        titleAccordion={`View your delivery details`}
        answerAccordion={<AccordionCheckoutDetailsAnswer formData={formData} />}
      />
    </div>
  );
}
