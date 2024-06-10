import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Information.scss";
export default function Information() {
  const location = useLocation();
  const margin = 32; // 32px = 2rem

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - margin;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="subpage">
      <div className="head-of-subpage">Information</div>
      <div className="content-div-subpage" id="information-contact">
        Contact
      </div>
      <div className="content-div-subpage" id="information-about-us">
        About Us
      </div>
      <div className="content-div-subpage" id="information-faq">
        FAQ
      </div>
      <div className="content-div-subpage" id="information-privacy-policy">
        Privacy Policy
      </div>
    </div>
  );
}
