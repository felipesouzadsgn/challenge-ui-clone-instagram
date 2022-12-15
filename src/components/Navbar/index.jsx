import "./_navbar.scss"

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

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <a className="nav__logo" href="#">
          <img src={logoInstagram} alt="home" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconHome} alt="home" />
              Página Inicial
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconSearch} alt="home" />
              Pesquisa
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconExplore} alt="home" />
              Explorar
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconMensages} alt="home" />
              Mensagens
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconNotifications} alt="home" />
              Notificações
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconPlus} alt="home" />
              Criar
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__img" src={imgProfile} alt="home" />
              Perfil
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">
          <img className="nav__icon" src={iconMenu} alt="home" />
          Mais
        </a>
      </div>
    </nav>
  )
}