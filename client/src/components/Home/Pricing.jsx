import data from "./Pricing/data";

function Pricing() {
  return (
    <section id="Pricing">
      <div className="container">
        {data.map((data) => (
          <article key={data.id} id={data.id}>
            <header>
              <h2>{data.name}</h2>
              <p>{data.pricingDescription}</p>
              <ul>
                <li className="amount">{data.priceAmount}</li>
                <li className="currency">USD</li>
                <li className="fees">per user/month</li>
              </ul>
              <button>{data.priceButton}</button>
            </header>
            <section>
              <ul>
                {data.listFeatures.map((dataFeature, indexFeature) => (
                  <li key={indexFeature}>
                    <i className="fa-solid fa-circle" />
                    <p>{dataFeature}</p>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
