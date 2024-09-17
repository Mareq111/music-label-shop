import { useEffect, useRef } from "react";
import BtnNavTo from "../UI/Buttons/BtnNavTo.jsx";
import "./MenuHamburger.scss";
import arenaCover from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import AccordionWithNav from "../UI/Accordions/AccordionWithNav.jsx";
import AccordionInformationAnswer from "../UI/Accordions/AccordionInformationAnswer.jsx";
import AccordionMyAccountAnswer from "../UI/Accordions/AccordionMyAccountAnswer.jsx";
import AccordionShoppingAnswer from "../UI/Accordions/AccordionShoppingAnswer.jsx";
import AccordionAuthorAnswer from "../UI/Accordions/AccordionAuthorAnswer.jsx";
import BadgeAnimatedStrimz from "../UI/Badge/BadgeAnimatedStrimz.jsx";
import BadgeAllSocials from "../UI/Badge/BadgeAllSocials.jsx";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

export default function MenuHamburger() {
  const menuRef = useRef(null);

  // Array with main menu buttons to pages
  const mainNavPages = [
    { link: "/albums/all-strimz-empire", img: arenaCover, title: "Albums" },
    { link: "/tickets/all-locations", img: arenaCover, title: "Tickets" },
    { link: "/t-shirts/all-colors", img: arenaCover, title: "T-shirts" },
    { link: "/gadgets/all-items", img: arenaCover, title: "Gadgets" },
    { link: "/posters/all-strimz-empire", img: arenaCover, title: "Posters" },
    { link: "/puzzles/all-levels", img: arenaCover, title: "Puzzles" },
  ];

  useEffect(() => {
    const menuElement = menuRef.current;
    if (menuElement) {
      const focusableElements = menuElement.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab (backward)
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab (forward)
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Focus on the first focusable element when the menu opens
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return (
    <aside className="aside-menu" ref={menuRef}>
      {/* Badge with name of page and x to return */}
      <BadgeTopOfAsideNav
        nameOfNavPage={"Menu"}
        showCloseButton={true}
        linkTo={"/.."}
      />
      <hr className="menu-devider-separator" />
      <div className="all-content-of-menu">
        {/* Main mapping elements from array to separate all BtnNavTo */}
        <h3 className="h-categories-menu">Categories</h3>
        <ul className="ul-nav-menu">
          <li>
            {mainNavPages.map((page, index) => (
              <BtnNavTo
                key={index}
                link={page.link}
                img={page.img}
                title={page.title}
              />
            ))}
          </li>
        </ul>
        <hr className="menu-devider-separator-smaller" />
        {/* Accordions with sub paths */}
        <ul className="list-of-pages">
          <li>
            <AccordionWithNav
              titleAccordion={"Information"}
              answerAccordion={<AccordionInformationAnswer />}
            />
          </li>
          <li>
            <AccordionWithNav
              titleAccordion={"My account"}
              answerAccordion={<AccordionMyAccountAnswer />}
            />
          </li>
          <li>
            <AccordionWithNav
              titleAccordion={"Shopping"}
              answerAccordion={<AccordionShoppingAnswer />}
            />
          </li>
          <li>
            <AccordionWithNav
              titleAccordion={"Author"}
              answerAccordion={<AccordionAuthorAnswer />}
            />
          </li>
        </ul>
        {/* Badge with logo */}
        <hr className="menu-devider-separator-smaller" />
        <div className="badge-strimz-menu">
          <BadgeAnimatedStrimz />
        </div>
        {/* Socials and rights */}
        <div className="menu-socials-badges-rights-div">
          <BadgeAllSocials />
          <p className="menu-text-rights">
            © 2024 All Rights Reserved, Strimz Empire.
          </p>
        </div>
      </div>
    </aside>
  );
}
