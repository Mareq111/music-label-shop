import BtnNavTo from "../UI/Buttons/BtnNavTo";
import "./Menu.scss";
import BtnNormalX from "../UI/Buttons/BtnNormalX.jsx";
import arenaCover from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import AccordionWithNav from "../UI/Accordions/AccordionWithNav.jsx";
import AccordionInformationAnswer from "../UI/Accordions/AccordionInformationAnswer.jsx";
import AccordionMyAccountAnswer from "../UI/Accordions/AccordionMyAccountAnswer.jsx";
import AccordionShoppingAnswer from "../UI/Accordions/AccordionShoppingAnswer.jsx";
import AccordionAuthorAnswer from "../UI/Accordions/AccordionAuthorAnswer.jsx";
export default function Menu() {
  //array with main  menu buttons to pages
  const mainNavPages = [
    { link: "/albums-type", img: arenaCover, title: "Albums" },
    { link: "/tickets-type", img: arenaCover, title: "Tickets" },
    { link: "/t-shirts-type", img: arenaCover, title: "T-shirts" },
    { link: "/gadgets-type", img: arenaCover, title: "Gadgets" },
    { link: "/posters-type", img: arenaCover, title: "Posters" },
    { link: "/puzzles-type", img: arenaCover, title: "Puzzles" },
  ];

  return (
    <aside className="aside-menu">
      <div className="top-of-aside-menu">
        <h2 className="h-menu-name">Menu</h2>
        <BtnNormalX />
      </div>
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
      </div>
    </aside>
  );
}
