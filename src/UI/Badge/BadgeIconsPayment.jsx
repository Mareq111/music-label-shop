import IconCreditCard from "../Icons/IconCreditCard";
import IconPaypal from "../Icons/IconPaypal";
import IconVisa from "../Icons/IconVisa";
import IconMastercard from "../Icons/IconMastercard";
import "./BadgeIconsPayment.scss";
export default function BadgeIconsPayment() {
  return (
    <ul className="icons-inside-badge">
      <li className="li-icons-inside-payment">
        <IconCreditCard />
      </li>
      <li className="li-icons-inside-payment">
        <IconVisa />
      </li>
      <li className="li-icons-inside-payment">
        <IconMastercard />
      </li>
      <li className="li-icons-inside-payment">
        <IconPaypal />
      </li>
    </ul>
  );
}
