import "./styles.scss"

import iconCarrossel from "../../assets/svg/icon-carrossel.svg"
import iconVideo from "../../assets/svg/icon-video.svg"

import { useState } from "react"
import { OpenModal } from "../Modal"
import { Link, useLocation } from "react-router-dom"

export const Post = ({ id, cover, url, type, isStory = false }) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {isStory ? (
        <div className="card story">
          <Link
            to={`/p/${id}`}
            className="card__content"
            state={{ background: location }}
          >
            < OpenModal
              openDialog={dialogOpen}
              setDialogOpen={setDialogOpen}
              url={url}
              type={type} >
              <img className="card__img" src={cover} alt="" />
            </OpenModal >
          </Link>
          <img className="card__icon" src={type === "image" ? iconCarrossel : iconVideo} alt="" />
        </div>
      ) : (
        <div className="card">
          <Link
            to={`/p/${id}`}
            className="card__content"
            state={{ background: location }}
          >
            < OpenModal
              openDialog={dialogOpen}
              setDialogOpen={setDialogOpen}
              url={url}
              type={type} >
              <img className="card__img" src={cover} alt="" />
            </OpenModal>
          </Link>
          <img className="card__icon" src={type === "image" ? iconCarrossel : iconVideo} alt="" />
        </div>
      )}
    </>
  )
}