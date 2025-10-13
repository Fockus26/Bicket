import Nav from "./Hero/Nav";
import Canvas from "./Hero/Canvas";

function Hero() {
  return (
    <header id="Hero">
      <Canvas />
      <Nav />
      <div className="container">
        <section>
          <h1>access everything you want</h1>
          <p>don't miss your favorite events with us</p>
          <button>
            <span data-attr-span="GET TICKETS">Get Tickets</span>
            <hr />
          </button>
        </section>
      </div>
    </header>
  );
}

export default Hero;
