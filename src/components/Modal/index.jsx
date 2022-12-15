import * as Dialog from "@radix-ui/react-dialog"
import iconClose from "../../assets/svg/icon-close.svg"
import iconArrow from "../../assets/svg/icon-arrow.svg"
import imgUser from "../../assets/img/profile.jpg"
import iconOption from "../../assets/svg/icon-option.svg"

import "./_modal.scss"

import { useNavigate } from "react-router-dom"
import { ViewContent } from "../ViewContent"

export const OpenModal = ({ children, openDialog, setDialogOpen, url, type }) => {
  const navigate = useNavigate()
  return (
    <section className="modal">
      <Dialog.Root open={openDialog} onOpenChange={setDialogOpen} >
        <Dialog.Trigger asChild>
          {children}
        </Dialog.Trigger>
        <Dialog.Portal className="modal__portal">
          <Dialog.Overlay className="modal__overlay" />
          <Dialog.Content className="modal__container">
            <button className="modal__btn-left">
              <img src={iconArrow} alt="" className="icon__arrow-left" />
            </button>
            <button className="modal__btn-right">
              <img src={iconArrow} alt="" className="icon__arrow-right" />
            </button>
            <div className="modal__content">
              <div className="modal__boxes">
                <div className="modal__box modal__box-left">
                  <div className="modal__play">
                    <ViewContent type={type} url={url} />
                  </div>
                </div>
                <div className="modal__box modal__box-right">
                  <header className="modal__box-header">
                    <div className="modal__box-wrapper">
                      <img className="modal__box-profile" src={imgUser} alt="" />
                      <div className="modal__box-username">
                        <strong>felipesouzadsgn</strong> • <button className="modal__box-follow">Seguir</button>
                      </div>
                    </div>
                    <a href="" className="modal__box-toggle">
                      <img className="modal__box-option" src={iconOption} alt="" />
                    </a>
                  </header>
                  <section className="modal__box-section"></section>
                  <footer className="modal__box-footer">
                    <div className="modal__box-likes"></div>
                    <div className="modal__box-write"></div>
                  </footer>
                </div>
                <Dialog.Close asChild>
                  <button className="modal__btn" onClick={() => navigate(-1)}>
                    <img className="modal__btn-icon" src={iconClose} alt="" />
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section >
  )
}