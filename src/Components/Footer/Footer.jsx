import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";
import InstagramIconSvg from "../InstagramIconSvg/InstagramIconSvg";
const Footer = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  const navigate = useNavigate();
  const handleLogoNav = () => {
    navigate("/");
  };
  return (
    <>
      <footer className="footer">
        <section className="footer__contact-us-section">
          <h2 className="footer__contact-us">Contact Us</h2>
          <p className="footer__phone">
            <Callto phone="718-207-6179">718-207-6179</Callto>
          </p>
        </section>
        <p className="footer__company-name" onClick={handleLogoNav}>
          VL Tech Mechanical
        </p>
        <section className="footer__follow-us-section">
          <h2 className="footer__follow-us">Follow Us</h2>
          <div className="footer__icons-container">
            <Link to="https://www.instagram.com/vltechmechanical/">
              <InstagramIconSvg />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
