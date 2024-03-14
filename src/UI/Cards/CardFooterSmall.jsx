import "./CardFooterSmall.scss";
import BadgeAnimatedStrimz from "../Badge/BadgeAnimatedStrimz";
import BadgeCategoriesWithH from "../Badge/BadgeCategoriesWithH";
export default function CardFooterSmall() {
  return (
    <div className="card-footer-small">
      <BadgeAnimatedStrimz />
      <BadgeCategoriesWithH />
    </div>
  );
}
