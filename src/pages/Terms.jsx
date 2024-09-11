import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
export default function Terms() {
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
      <div className="head-of-subpage">
        <h3 className="h-text-subpage">Terms and Conditions </h3>
        <p className="p-subpage-description">
          Welcome to Strimz Shop! Please note that this website is not a real
          store and exists solely for portfolio and demonstration purposes. By
          logging in, you acknowledge and agree to the following terms.
        </p>
      </div>

      <div className="all-sections-subpage">
        <section className="content-section-subpage" id="return-policy">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">
              Important Information About This Portfolio Site, thanks for
              visiting.
            </h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">
                  1. Non-Existent Products and Services
                </h5>
                <p className="p-into-subpage">
                  Strimz Shop does not sell real products or services. Any items
                  displayed on this site are fictional and created solely for
                  design and development showcase purposes.
                </p>
              </div>
            </div>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">
                  2. No Transactions or Payments
                </h5>
                <p className="p-into-subpage">
                  This website does not process real transactions. Any payment
                  information entered will not be collected or processed, as
                  this site is a portfolio project meant to demonstrate web
                  design and coding skills.
                </p>
              </div>
            </div>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">
                  3. No Personal Data Collection
                </h5>
                <p className="p-into-subpage">
                  Strimz Shop does not collect or store any data. All
                  information provided is purely for demonstration purposes and
                  will not be used or saved.
                </p>
              </div>
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">4. Thank You for Visiting</h5>
                <p className="p-into-subpage">
                  Thank you for visiting Strimz Shop and taking the time to read
                  our terms and conditions. We hope you find this portfolio site
                  helpful for understanding web design and development. Your
                  interest is greatly appreciated!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
