import "./CardHomepageSocialAndWebsiteLinks.scss";
import BtnCheckWebsite from "../../UI/Buttons/BtnCheckWebsite.jsx";
export default function CardHomepageWebsiteLink() {
  return (
    <section className="homepage-social-links-section-homepage">
      <h3 className="h-streaming-logos-homepage">
      Explore more on our website.
      </h3>
      <div className="btn-homepage-website">
      <BtnCheckWebsite />

      </div>
    </section>
  );
}
