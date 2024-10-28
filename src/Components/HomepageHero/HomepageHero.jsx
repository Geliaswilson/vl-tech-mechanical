import "./HomepageHero.scss";
const HomepageHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h2 className="hero__company">VL Tech</h2>
          <p className="hero__time">24/7 Services</p>
          <p className="hero__services">Emergency Calls at All times</p>
          <button className="hero__button">Free Quote</button>
        </div>
      </section>
    </>
  );
};
export default HomepageHero;
