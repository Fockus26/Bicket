import Feature from "./Features/Feature";
import Bar from "./Features/Bar";
import { data } from "./Features/data";

function Features() {
  return (
    <main id="Features">
      <div className="container">
        <section className="featuresArticle">
          {data.map((feature, indexFeature) => (
            <Feature
              key={indexFeature}
              videoURL={feature.videoURL}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </section>

        <Bar />
      </div>
    </main>
  );
}

export default Features;
