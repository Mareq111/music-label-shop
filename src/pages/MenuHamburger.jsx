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
  //array with main  menu buttons to pages
  const mainNavPages = [
    { link: "/albums/all-strimz-empire", img: arenaCover, title: "Albums" },
    { link: "/tickets", img: arenaCover, title: "Tickets" },
    { link: "/t-shirts", img: arenaCover, title: "T-shirts" },
    { link: "/gadgets", img: arenaCover, title: "Gadgets" },
    { link: "/posters", img: arenaCover, title: "Posters" },
    { link: "/puzzles", img: arenaCover, title: "Puzzles" },
  ];

  return (
    <aside className="aside-menu">
      {/* bagde with name of page and x to return */}
      <BadgeTopOfAsideNav nameOfNavPage={"Menu"} />
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
        {/* accordions with sub paths*/}

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
        {/* badge with logo */}
        <hr className="menu-devider-separator-smaller" />
        <div className="badge-strimz-menu">
          <BadgeAnimatedStrimz />
        </div>
        {/* socials and rights */}
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
