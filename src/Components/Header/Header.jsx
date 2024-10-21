import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        className="header__img"
        src="src/assets/icons/Screenshot 2024-10-17 at 6.45.34 PM.png"
        alt="Logo"
      />
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li className="header__nav-li">
            <a className="header__link" href="#">
              Home
            </a>
          </li>
          <li className="header__nav-li">
            <a className="header__link" href="#">
              Services
            </a>
          </li>
          <li className="header__nav-li">
            <a className="header__link" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="header__button"
        onClick={() => navigate("/form")}
      >
        Free Quote Today!
      </button>
    </header>
  );
}

export default Header;
