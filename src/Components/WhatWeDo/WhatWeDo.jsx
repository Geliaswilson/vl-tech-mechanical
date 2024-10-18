import "./WhatWeDo.scss";

function WhatWeDo() {
  return (
    <section className="Services">
      <h2 className="Services__heading">Plumbing Services We Offer...</h2>

      <div className="Services__container">
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/icons8-plumbing-100.png"
              alt="Plumbing Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">General Plumbing:</h3>
            <ul className="Services__service-list">
              <li className="Services__service">Water Heaters</li>
              <li className="Services__service">Faucets & Sinks</li>
              <li className="Services__service">Tubs & Showers</li>
              <li className="Services__service">Water Treatment</li>
              <li className="Services__service">Drains</li>
              <li className="Services__service">Pipe Replacement</li>
              <li className="Services__service">Leak Repairs</li>
              <li className="Services__service">Sprinkler</li>
            </ul>
          </div>
        </div>
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/9360313_leaky_pipe_icon.png"
              alt="Leak Detection Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">Leak Detection:</h3>
            <p className="Services__service">
              A water leak can result in significant damage to your home and
              belongings. However, since water can travel in unexpected ways,
              identifying the exact source of the leak can often be a lengthy
              and costly process. We utilize cutting-edge technology and
              specialized knowledge to accurately pinpoint both the cause and
              location of the leak. Additionally, we assess whether the problem
              is isolated or part of a larger issue, ensuring the best possible
              resolution for minimizing water damage and property loss.
            </p>
          </div>
        </div>
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/10282884_plumbing_bathroom_plumber_repair_commode_icon.png"
              alt="Pipe Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">Toilet Repair:</h3>
            <p className="Services__service">
              We provide toilet repair or replacement services for issues such
              as leaks, clogs, continuous running, slow or improper filling, or
              flushing problems. Additionally, we offer eco-friendly,
              water-efficient options to help conserve water.
            </p>
          </div>
        </div>
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/3708800_electric heating_gas geyser_water boiler_water geyser_water heater_icon.png"
              alt="Water Heater Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">Water Heater Repair:</h3>
            <p className="Services__service">
              Replacing your hot water heater can be costly, and in many cases,
              it may be more budget-friendly to repair a unit that is still in
              good overall condition. We also provide hot water solutions
              tailored for larger homes or situations where a standard hot water
              heater may not be the best fit.
            </p>
          </div>
        </div>
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/7513893_plumbing_pipeline_water_furniture_pipe_icon.png"
              alt="Water Pipe Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">Pipe Repair:</h3>
            <p className="Services__service">
              We repair damage to both freshwater and wastewater pipes, which
              can occur due to various factors such as root intrusion from
              landscaping, vermin damage, backflow prevention issues, hot water
              heater problems, and appliance malfunctions.
            </p>
          </div>
        </div>
        <div className="Services__container-card">
          <div className="Services__container-img">
            <img
              className="Services__icon"
              src="src/assets/icons/10282901_drain_cleaning_clean_plumbing_service_icon.png"
              alt="Toilet Repair Icon"
            />
          </div>
          <div className="Services__content">
            <h3 className="Services__action">Drain Cleaning:</h3>
            <p className="Services__service">
              We provide drain cleaning and repair services for both commercial
              and residential properties. Our services cover kitchen and
              bathroom drains, including sinks, showers, and industrial drains,
              as well as sewer pipe cleaning and repair, landscape pipe damage
              repair, and water heater plumbing and repair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
