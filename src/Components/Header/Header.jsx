import "./Header.scss"
function Header() {
    return(
        <header className="header">
            <img className="header__img" src="src/assets/icons/Screenshot 2024-10-17 at 4.34.39 PM.png" alt="" />
            <nav className="header__nav">
                <ul className="header__nav-ul">
                    <li className="header__nav-li"><a className="header__link" href="#">Home</a></li>
                    <li className="header__nav-li"><a className="header__link" href="#">Services</a></li>
                    <li className="header__nav-li"><a className="header__link" href="#">About</a></li>
                </ul>
            </nav>
            <button className="header__button">Free Quote Today!</button>
        </header>
    )
}

export default Header