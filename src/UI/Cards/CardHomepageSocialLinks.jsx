import BadgeAllSocials from "../../UI/Badge/BadgeAllSocials.jsx";
import "./CardHomepageSocialAndWebsiteLinks.scss";
export default function CardHomepageSocialLinks() {
  return (
    <section className="homepage-social-links-section-homepage">
      <h3 className="h-streaming-logos-homepage">
        Connect with us on social media.
      </h3>
      <BadgeAllSocials />
    </section>
  );
}
