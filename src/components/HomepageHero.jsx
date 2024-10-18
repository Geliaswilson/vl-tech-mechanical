import "./HomepageHero.scss";
const HomepageHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h2 className="hero__company">VL Mechanical</h2>
          <p className="hero__time">24/7 Services</p>
          <p className="hero__services">Plumbing, Sewage</p>
          <button className="hero__button">Free Quote</button>
        </div>
      </section>
    </>
  );
};
export default HomepageHero;
