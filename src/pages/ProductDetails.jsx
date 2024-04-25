/* eslint-disable no-unused-vars */
import "./ProductDetails.scss";
import ContentProductDetails from "../components/ContentProductDetails";
import ContentProductDetailsLeftSide from "../components/ContentProductDetailsLeftSide";
import YouMightLike from "../components/YouMightLike";
import BadgeIdAndArrowBack from "../UI/Badge/BadgeIdAndArrowBack";
import { useParams, useLocation } from "react-router-dom";
export default function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();
  const productIdFromState = location.state ? location.state.productId : null;
  return (
    <section className="all_sections__product">
      {/* section images with description which is on the left side then > 500px screens*/}
      <section className="section-1__left-side">
        {/* bagde with id of product and arrow back btn */}
        <BadgeIdAndArrowBack productId={productId} />
        {/*   <ImgProductDetails /> */}
        <ContentProductDetailsLeftSide />
      </section>
      {/* section with content which is on the right side then > 500px screens*/}
      <section className="section-2__right-side">
        <ContentProductDetails />
      </section>
      {/* section you might like equals similar products  */}
      <section className="section-youMightLike">
        <YouMightLike />
      </section>
    </section>
  );
}
