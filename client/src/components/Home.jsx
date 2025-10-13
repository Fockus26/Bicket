import Hero from "./Home/Hero";
import Features from "./Home/Features";
import Pricing from "./Home/Pricing";
import QA from "./Home/QA";
import Footer from "./General/Footer";
import "scss/Home.scss";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <QA />
      <Footer />
    </>
  );
}

export default Home;
