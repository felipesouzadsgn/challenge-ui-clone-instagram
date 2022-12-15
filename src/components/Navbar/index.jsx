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
        <a className="nav__logo-icon" href="#">
          <img className="nav__icon" src={iconInstagram} alt="home" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconHome} alt="home" />
              <span className="nav__link-title">
                Página Inicial
              </span>
            </a>
          </li>
          <li className="nav__item nav__item-search">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconSearch} alt="home" />
              <span className="nav__link-title">
                Pesquisa
              </span>
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconExplore} alt="home" />
              <span className="nav__link-title">
                Explorar
              </span>
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconMensages} alt="home" />
              <span className="nav__link-title">
                Mensagens
              </span>
            </a>
          </li>

          <li className="nav__item nav__item-notifications">
            <a className="nav__link" href="#">
              <img className="nav__icon nav__icon" src={iconNotifications} alt="home" />
              <span className="nav__link-title">
                Notificações
              </span>
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__icon" src={iconPlus} alt="home" />
              <span className="nav__link-title">
                Criar
              </span>
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              <img className="nav__img" src={imgProfile} alt="home" />
              <span className="nav__link-title">
                Perfil
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__item nav__item-more">
        <a className="nav__link" href="#">
          <img className="nav__icon nav__icon-toggle" src={iconMenu} alt="home" />
          <span className="nav__link-title">
            Mais
          </span>
        </a>
      </div>
    </nav>
  )
}