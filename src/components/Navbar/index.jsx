import "./styles.scss"

import logoInstagram from "../../assets/svg/logo-instagram.svg"
import iconInstagram from "../../assets/svg/icon-instagram.svg"
import iconHome from "../../assets/svg/icon-home.svg"
import iconSearch from "../../assets/svg/icon-search.svg"
import iconExplore from "../../assets/svg/icon-explore.svg"
import iconMenu from "../../assets/svg/icon-menu.svg"
import iconMensages from "../../assets/svg/icon-mensages.svg"
import iconNotifications from "../../assets/svg/icon-notifications.svg"
import iconPlus from "../../assets/svg/icon-plus.svg"
import imgProfile from "../../assets/img/profile.jpg"
import { Link } from "react-router-dom"

const NavLink = ({ to, title, icon }) => {
  return (
    <Link to={to} className="nav__link">
      <img className="nav__icon" src={icon} alt="home" />
      <span className="nav__link-title">
        {title}
      </span>
    </Link>
  )
}

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <a className="nav__logo" href="#">
          <img src={logoInstagram} alt="home" />
        </a>
        <a className="nav__logo-icon" href="#">
          <img className="nav__icon" src={iconInstagram} alt="home" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" title="Página inicial" icon={iconHome} />
          </li>
          <li className="nav__item nav__item-search">
            <NavLink to="/search" title="Pesquisa" icon={iconSearch} />
          </li>

          <li className="nav__item">
            <NavLink to="/explore" title="Explorar" icon={iconExplore} />
          </li>

          <li className="nav__item">
            <NavLink to="/direct" title="Mensagens" icon={iconMensages} />
          </li>

          <li className="nav__item nav__item-notifications">
            <NavLink to="/notifications" title="Notificações" icon={iconNotifications} />
          </li>

          <li className="nav__item">
            <NavLink to="/create" title="Criar" icon={iconPlus} />
          </li>

          <li className="nav__item">
            <Link to="/profile" className="nav__link">
              <img className="nav__img" src={imgProfile} alt="home" />
              <span className="nav__link-title">
                Perfil
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__item nav__item-more">
        <NavLink to="/more" title="Mais" icon={iconMenu} />
      </div>
    </nav>
  )
}