import "./ServicesCards.scss";
const ServicesCards = () => {
  return (
    <>
      <section className="service-cards">
        <h2 className="service-cards__title">Our Services</h2>
        <ul className="service-cards__cards-list">
          <li className="service-cards__list-item">
            <h3 className="service-cards__service-name">Leak Detection</h3>
            <p className="service-cards__service-description">
              A water leak can result in significant damage to your home and
              belongings. However, since water can travel in unexpected ways,
              identifying the exact source of the leak can often be a lengthy
              and costly process. We utilize cutting-edge technology and
              specialized knowledge to accurately pinpoint both the cause and
              location of the leak. Additionally, we assess whether the problem
              is isolated or part of a larger issue, ensuring the best possible
              resolution for minimizing water damage and property loss.
            </p>
          </li>
          <li className="service-cards__list-item">
            <h3 className="service-cards__service-name">Toilet Repair</h3>
            <p className="service-cards__service-description">
              We provide toilet repair or replacement services for issues such
              as leaks, clogs, continuous running, slow or improper filling, or
              flushing problems. Additionally, we offer eco-friendly,
              water-efficient options to help conserve water.
            </p>
          </li>
          <li className="service-cards__list-item">
            <h3 className="service-cards__service-name">Water Heater Repair</h3>
            <p className="service-cards__service-description">
              Replacing your hot water heater can be costly, and in many cases,
              it may be more budget-friendly to repair a unit that is still in
              good overall condition. We also provide hot water solutions
              tailored for larger homes or situations where a standard hot water
              heater may not be the best fit.
            </p>
          </li>
          <li className="service-cards__list-item">
            <h3 className="service-cards__service-name">Pipe Repair</h3>
            <p className="service-cards__service-description">
              We repair damage to both freshwater and wastewater pipes, which
              can occur due to various factors such as root intrusion from
              landscaping, vermin damage, backflow prevention issues, hot water
              heater problems, and appliance malfunctions.
            </p>
          </li>
          <li className="service-cards__list-item">
            <h3 className="service-cards__service-name">Drain Cleaning</h3>
            <p className="service-cards__service-description">
              We provide drain cleaning and repair services for both commercial
              and residential properties. Our services cover kitchen and
              bathroom drains, including sinks, showers, and industrial drains,
              as well as sewer pipe cleaning and repair, landscape pipe damage
              repair, and water heater plumbing and repair.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default ServicesCards;
