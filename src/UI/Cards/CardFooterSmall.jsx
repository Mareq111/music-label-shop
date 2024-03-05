import "./CardFooterSmall.scss";
import BadgeAnimatedStrimz from "../Badge/BadgeAnimatedStrimz";
import BadgePopularCategories from "../Badge/BadgePopularCategories";
export default function CardFooterSmall() {
  return (
    <div className="card-footer-small">
      <BadgeAnimatedStrimz />
      <BadgePopularCategories />
    </div>
  );
}
