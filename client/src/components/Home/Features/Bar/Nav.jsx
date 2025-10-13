import { useState } from "react";

function Nav(props) {
  const { showPage, dataPagesNavBar, isMobile } = props;

  const [indexActivePage, setIndexActivePage] = useState(0);
  const [currentItem, setcurrentItem] = useState(
    Object.keys(dataPagesNavBar)[indexActivePage]
  );

  const showSlide = (newIndex) => {
    setIndexActivePage(newIndex);
    setcurrentItem(Object.keys(dataPagesNavBar)[newIndex]);
    showPage(Object.keys(dataPagesNavBar)[newIndex]);
  };

  const prevSlide = () => showSlide(indexActivePage - 1);
  const nextSlide = () => showSlide(indexActivePage + 1);

  return (
    <nav>
      {isMobile && (
        <i
          className="fa-solid fa-angle-left"
          onClick={prevSlide}
          style={{
            opacity: indexActivePage === 0 && "0",
            pointerEvents: indexActivePage === 0 && "none",
          }}
        />
      )}
      <ul
        style={{
          transform: isMobile && `translateX(-${indexActivePage * 100}%)`,
        }}
      >
        {Object.entries(dataPagesNavBar).map(
          ([keyPage, valuePage], indexPage) => (
            <li
              key={indexPage}
              className={`${keyPage === currentItem ? "active" : ""}`}
              onClick={() => showSlide(indexPage)}
            >
              <img src={valuePage.imgSrc} alt={valuePage.imgAlt} />
            </li>
          )
        )}
      </ul>
      {isMobile && (
        <i
          className="fa-solid fa-angle-right"
          onClick={nextSlide}
          style={{
            opacity:
              indexActivePage === Object.keys(dataPagesNavBar).length - 1 &&
              "0",
            pointerEvents:
              indexActivePage === Object.keys(dataPagesNavBar).length - 1 &&
              "none",
          }}
        />
      )}
    </nav>
  );
}

export default Nav;
