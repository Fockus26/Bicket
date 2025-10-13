import { useState, useEffect } from "react";
import useColorPage from "utils/useColorPage";

function Content(props) {
  const {
    dataPagesArticles,
    activePage,
    activeFeature,
    showFeature,
    isMobile,
  } = props;

  const [prevFeature, setPrevFeature] = useState("page");
  // Cuando cambie el activeFeature se cambia la imagen
  useEffect(() => {
    activeFeature && setPrevFeature(activeFeature);
  }, [activeFeature]);

  const [showVideo, setShowVideo] = useState(false);
  // Cuando se muestre el video no se podra hacer scroll
  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";

    return () => (document.body.style.overflow = "auto");
  }, [showVideo]);

  const handleShowVideo = () => setShowVideo(!showVideo);

  const handleStartVideo = (e) => {
    const video = e.target;
    video.paused ? video.play() : video.pause();
  };

  const RenderPage = ({ page }) => (
    <article style={useColorPage(activePage).colorVariations}>
      {!isMobile && renderMedia(page[prevFeature].media)}

      <div>
        {Object.entries(page).map(
          ([featureKey, featureValue], featureIndex) => {
            const { footer: footerFeature, header: headerFeature } =
              featureValue;

            return (
              <section key={featureIndex}>
                <header onClick={() => showFeature(featureKey)}>
                  <h2>{featureKey}</h2>
                  <i className={headerFeature.icon} />
                </header>

                <footer
                  style={{
                    height: activeFeature !== featureKey ? "0" : undefined,
                    opacity: activeFeature !== featureKey ? "0" : undefined,
                    margin:
                      activeFeature === featureKey
                        ? "0.938rem 0 1.563rem"
                        : undefined,
                    pointerEvents:
                      activeFeature !== featureKey ? "none" : undefined,
                  }}
                >
                  <p>{headerFeature.caption}</p>
                  {renderFeature(footerFeature)}
                </footer>

                <hr />
              </section>
            );
          }
        )}
      </div>
    </article>
  );

  const renderMedia = (mediaFeature) => (
    <>
      {showVideo && (
        <div>
          <video
            src={mediaFeature.videoSrc}
            onClick={handleStartVideo}
            autoPlay
          />
          <div onClick={handleShowVideo} className="fullscreen-overlay" />
        </div>
      )}
      <img
        src={mediaFeature.imgSrc}
        alt={mediaFeature.imgAlt}
        onClick={handleShowVideo}
      />
    </>
  );

  const renderFeature = (feature) =>
    activeFeature && (
      <ul className={activeFeature}>
        {feature.map((featureValue, indexFeature) => (
          <li key={indexFeature}>
            {activeFeature === "buying" ? (
              <i className={featureValue} />
            ) : (
              <>
                {activeFeature === "authentication" && (
                  <img src={featureValue.imgSrc} alt={featureValue.imgAlt} />
                )}

                <h3>{featureValue.caption}</h3>

                {activeFeature === "searching" ? (
                  <i className={featureValue.icon} />
                ) : (
                  <div className="progress-bar">
                    {Array.from({ length: featureValue.stripes }).map(
                      (_, index) => (
                        <div key={index} className="diagonal-stripe" />
                      )
                    )}
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    );

  return (
    <>
      {Object.entries(dataPagesArticles).map(
        ([keyPage, valuePage]) =>
          activePage === keyPage && (
            <RenderPage key={keyPage} page={valuePage} />
          )
      )}
    </>
  );
}

export default Content;
