import "./ServicesCards.scss";
import closeButton from "../../assets/icons/close-circle-svgrepo-com.svg"
import Modal from "react-modal";
import { useState } from "react";

const ServicesCards = () => {
  Modal.setAppElement("#root");
  const [leakModalIsOpen, setLeakModalIsOpen] = useState(false);
  const [toiletModalIsOpen, setToiletModalIsOpen] = useState(false);
  const [waterHeaterModalIsOpen, setWaterHeaterModalIsOpen] = useState(false);
  const [pipeModalIsOpen, setPipeModalIsOpen] = useState(false);
  const [drainModalIsOpen, setDrainModalIsOpen] = useState(false);
  const openLeakModal = () => setLeakModalIsOpen(true);
  const closeLeakModal = () => setLeakModalIsOpen(false);
  const openToiletModal = () => setToiletModalIsOpen(true);
  const closeToiletModal = () => setToiletModalIsOpen(false);
  const openWaterHeaterModal = () => setWaterHeaterModalIsOpen(true);
  const closeWaterHeaterModal = () => setWaterHeaterModalIsOpen(false);
  const openPipeModal = () => setPipeModalIsOpen(true);
  const closePipeModal = () => setPipeModalIsOpen(false);
  const openDrainModal = () => setDrainModalIsOpen(true);
  const closeDrainModal = () => setDrainModalIsOpen(false);

  return (
    <>
      <section className="service-cards">
        <h2 className="service-cards__title">Our Services</h2>
        <ul className="service-cards__cards-list">
          <li className="service-cards__list-item">
            <button
              className="service-cards__service-name"
              onClick={openLeakModal}
            >
              <p className="service-cards__actual-leak-name">Leak Detection</p>
            </button>
          </li>
          <li className="service-cards__list-item">
            <button
              className="service-cards__service-name"
              onClick={openToiletModal}
            >
              <p className="service-cards__actual-toilet-name">Toilet Repair</p>
            </button>
          </li>
          <li className="service-cards__list-item">
            <button
              className="service-cards__service-name"
              onClick={openWaterHeaterModal}
            >
              <p className="service-cards__actual-water-name">Water Heater Repair</p>
            </button>
          </li>
          <li className="service-cards__list-item">
            <button
              className="service-cards__service-name"
              onClick={openPipeModal}
            >
              <p className="service-cards__actual-pipe-name">Pipe Repair</p>
            </button>
          </li>
          <li className="service-cards__list-item">
            <button
              className="service-cards__service-name"
              onClick={openDrainModal}
            >
              <p className="service-cards__actual-drain-name">Drain Cleaning</p>
            </button>
          </li>
        </ul>
        <Modal
          isOpen={leakModalIsOpen}
          onRequestClose={closeLeakModal}
          className="full-size-modal"
          overlayClassName="full-size-modal"
        >
          <div className="modal-content">
          <button onClick={closeLeakModal} className="close-button"><img src={closeButton}/></button>
            <p className="service-cards__service-description leak_detection_desc">
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
        </Modal>
        <Modal
          isOpen={toiletModalIsOpen}
          onRequestClose={closeToiletModal}
          className="full-size-modal"
          overlayClassName="full-size-modal"
        >
          <div className="modal-content">
          <button onClick={closeToiletModal} className="close-button"><img src={closeButton}/></button>
            <p className="service-cards__service-description toilet_repair_desc">
              We provide toilet repair or replacement services for issues such
              as leaks, clogs, continuous running, slow or improper filling, or
              flushing problems. Additionally, we offer eco-friendly,
              water-efficient options to help conserve water.
            </p>
          </div>
        </Modal>
        <Modal
          isOpen={waterHeaterModalIsOpen}
          onRequestClose={closeWaterHeaterModal}
          className="full-size-modal"
          overlayClassName="full-size-modal"
        >
          <div className="modal-content">
          <button onClick={closeWaterHeaterModal} className="close-button"><img src={closeButton}/></button>
            <p className="service-cards__service-description water_heater_repair_desc">
              Replacing your hot water heater can be costly, and in many cases,
              it may be more budget-friendly to repair a unit that is still in
              good overall condition. We also provide hot water solutions
              tailored for larger homes or situations where a standard hot water
              heater may not be the best fit.
            </p>
          </div>
        </Modal>
        <Modal
          isOpen={pipeModalIsOpen}
          onRequestClose={closePipeModal}
          className="full-size-modal"
          overlayClassName="full-size-modal"
        >
          <div className="modal-content">
          <button onClick={closePipeModal} className="close-button"><img src={closeButton}/></button>
            <p className="service-cards__service-description pipe_repair_desc">
              We repair damage to both freshwater and wastewater pipes, which
              can occur due to various factors such as root intrusion from
              landscaping, vermin damage, backflow prevention issues, hot water
              heater problems, and appliance malfunctions.
            </p>
          </div>
        </Modal>
        <Modal
          isOpen={drainModalIsOpen}
          onRequestClose={closeDrainModal}
          className="full-size-modal"
          overlayClassName="full-size-modal"
        >
          <div className="modal-content">
          <button onClick={closeDrainModal} className="close-button"><img src={closeButton}/></button>
            <p className="service-cards__service-description drain_cleaning_desc">
              We provide drain cleaning and repair services for both commercial
              and residential properties. Our services cover kitchen and
              bathroom drains, including sinks, showers, and industrial drains,
              as well as sewer pipe cleaning and repair, landscape pipe damage
              repair, and water heater plumbing and repair.
            </p>
          </div>
        </Modal>
      </section>
    </>
  );
};
export default ServicesCards;
