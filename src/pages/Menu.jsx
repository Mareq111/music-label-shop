import BtnNavTo from "../UI/Buttons/BtnNavTo";
import "./Menu.scss";
import BtnNormalX from "../UI/Buttons/BtnNormalX.jsx";
import arenaCover from "../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
export default function Menu() {
  const coreNavPages = [
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
      <hr className='menu-devider-separator'/>
      <div className="all-content-of-menu">
        {/* mapping elements from array to separate BtnNavTo */}
        <ul className="ul-nav-menu">
          <li>
            {coreNavPages.map((page, index) => (
              <BtnNavTo
                key={index}
                link={page.link}
                img={page.img}
                title={page.title}
              />
            ))}
          </li>
        </ul>
        <hr className='menu-devider-separator'/>
      </div>
    </aside>
  );
}
