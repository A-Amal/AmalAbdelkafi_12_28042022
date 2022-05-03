import logo from '../assets/logo.svg'
import '../styles/Header.css'


function Header(){
return(
    <header className="header">
                <nav className="header-nav">
                    <div className="header-logo">
                        <img src={logo} alt="Logo SportSee" />
                    </div>
                    <ul className="header-menu">
                        <li className="header-menu-link">Accueil</li>
                        <li className="header-menu-link">Profil</li>
                        <li className="header-menu-link">Réglage</li>
                        <li className="header-menu-link">Communauté</li>
                    </ul>
                </nav>
            </header>
)
}
export default Header
