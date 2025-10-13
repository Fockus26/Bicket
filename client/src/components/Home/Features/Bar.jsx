import { useEffect, useState, useRef } from "react";
import Nav from "./Bar/Nav";
import Content from "./Bar/Content";
import { dataPages } from "./data";

import useDeviceSize from "utils/useDeviceSize";

function Bar() {
  const dataPagesNavBar = Object.entries(dataPages).reduce(
    (acc, [key, { navBar }]) => {
      return {
        ...acc,
        [key]: navBar,
      };
    },
    {}
  );
  const dataPagesArticles = Object.entries(dataPages).reduce(
    (acc, [key, { article }]) => {
      return {
        ...acc,
        [key]: article,
      };
    },
    {}
  );

  const { isMobile } = useDeviceSize();

  const sectionRef = useRef(null);
  useEffect(() => {
    // Manejo del IntersectionObserver para la visibilidad de la sección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeout = setTimeout(() => {
              setActiveFeature("page");
            }, 1000);

            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionElement = sectionRef.current;

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    // Cleanup
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Usar la variable local
      }
    };
  }, []);

  const timerRef = useRef(null);

  const [activePage, setActivePage] = useState("ticketmaster");
  const showPage = (page) => {
    setActivePage(page);
    setActiveFeature(null);

    timerRef.current && clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setActiveFeature("page");
    }, 4000);
  };

  const [activeFeature, setActiveFeature] = useState(null);
  const showFeature = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);

    timerRef.current && clearTimeout(timerRef.current);
  };

  return (
    <section className="barFeature" ref={sectionRef}>
      <Nav
        dataPagesNavBar={dataPagesNavBar}
        showPage={showPage}
        isMobile={isMobile}
      />

      <Content
        dataPagesArticles={dataPagesArticles}
        activePage={activePage}
        activeFeature={activeFeature}
        showFeature={showFeature}
        isMobile={isMobile}
      />
    </section>
  );
}

export default Bar;
