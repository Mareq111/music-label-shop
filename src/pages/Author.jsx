/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
import BadgeMySocials from "../UI/Badge/BadgeMySocials";
export default function Author() {
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
        <h3 className="h-text-subpage">Author</h3>
        <p className="p-subpage-description">
          Explore to learn more about me, my projects, connect on social media,
          and get in touch.
        </p>
      </div>

      {/* all sections into page */}
      <div className="all-sections-subpage">
        {/* section contact */}

        <section className="content-section-subpage" id="about-author">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">About Author</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">My Story</h5>
                <p className="p-into-subpage">
                  Hi there! I'm Marek Szulc, and this is my space on the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section-subpage" id="project-info">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Project Info</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Description</h5>
                <p className="p-into-subpage">IN BULDING</p>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-subpage" id="my-socials">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">My Socials</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">
                  Github, Linkedin and Instagram
                </h5>
                <p className="p-into-subpage">
                  Hello, here you will find my social media profiles. I
                  encourage you to contact me or ask questions. Below you will
                  find links to my profiles:
                </p>
                <BadgeMySocials />
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-subpage" id="contact-to-me">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Contact To Me</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">My Email</h5>
                <p className="p-into-subpage">marekk.szulc@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
